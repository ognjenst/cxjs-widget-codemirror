
import * as Cx from 'cx/core';

interface CodeMirrorProps extends Cx.WidgetProps {
    style?: Cx.StyleProp,
    code: Cx.StringProp
}

export class CodeMirror extends Cx.Widget<CodeMirrorProps> {}