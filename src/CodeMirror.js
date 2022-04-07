import codemirror from 'codemirror';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/matchtags';
import 'codemirror/addon/selection/active-line';
import 'codemirror/mode/clike/clike';
import 'codemirror/mode/javascript/javascript';
import { CSS, VDOM, Widget } from 'cx/ui';
import { isString } from 'cx/util';

export class CodeMirror extends Widget {
   declareData() {
      return super.declareData(...arguments, {
         code: undefined,
         className: { structured: true },
         class: { structured: true },
         style: { structured: true },
         onSave: undefined,
      });
   }

   render(context, instance, key) {
      return <Component key={key} instance={instance} data={instance.data} />;
   }
}

CodeMirror.prototype.baseClass = 'codemirror';

class Component extends VDOM.Component {
   render() {
      var { data, widget } = this.props.instance;
      return (
         <div className={data.classNames} style={data.style}>
            <textarea className={CSS.element(widget.baseClass, 'input')} defaultValue={data.code} ref="input" />
         </div>
      );
   }

   shouldComponentUpdate() {
      return false;
   }

   componentDidMount() {
      var { widget } = this.props.instance;
      this.cm = codemirror.fromTextArea(this.refs.input, {
         lineNumbers: true,
         mode: widget.mode,
         tabSize: 2,
         matchTags: { bothTags: true },
         autoCloseTags: true,
         styleActiveLine: true,
         extraKeys: {
            'Ctrl-S': () => this.doSave(),
            // 'Ctrl-I': () => this.resolveImport()
         },
      });
      this.cm.on('blur', () => this.onBlur());
   }

   componentWillReceiveProps(props) {
      if (props.data.code != this.cm.getValue()) this.cm.setValue(props.data.code || '');
   }

   save() {
      var { widget, store } = this.props.instance;
      if (widget.nameMap.code) {
         var value = this.cm.getValue();
         if (typeof value == 'string') store.set(widget.nameMap.code, value);
      }
   }

   doSave() {
      this.save();

      let { data, controller } = this.props.instance;
      if (isString(data.onSave)) controller[data.onSave]();
      else onSave();
   }

   onBlur() {
      this.save();
   }
}

CodeMirror.prototype.mode = 'text/x-java';
