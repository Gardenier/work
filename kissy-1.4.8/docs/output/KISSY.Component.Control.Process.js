Ext.data.JsonP.KISSY_Component_Control_Process({"tagname":"class","name":"KISSY.Component.Control.Process","autodetected":{},"files":[{"filename":"render.js","href":"render4.html#KISSY-Component-Control-Process"}],"private":true,"members":[{"name":"getBaseCssClass","tagname":"method","owner":"KISSY.Component.Control.Process","id":"method-getBaseCssClass","meta":{}},{"name":"getBaseCssClasses","tagname":"method","owner":"KISSY.Component.Control.Process","id":"method-getBaseCssClasses","meta":{}},{"name":"getComponentConstructorByNode","tagname":"method","owner":"KISSY.Component.Control.Process","id":"method-getComponentConstructorByNode","meta":{}},{"name":"extend","tagname":"method","owner":"KISSY.Component.Control.Process","id":"static-method-extend","meta":{"static":true}}],"alternateClassNames":[],"aliases":{},"id":"class-KISSY.Component.Control.Process","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/render4.html#KISSY-Component-Control-Process' target='_blank'>render.js</a></div></pre><div class='doc-contents'><div class='rounded-box private-box'><p><strong>NOTE:</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p></div><p>Base Render class for KISSY Component.</p>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance methods</h3><div id='method-getBaseCssClass' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Component.Control.Process'>KISSY.Component.Control.Process</span><br/><a href='source/render4.html#KISSY-Component-Control-Process-method-getBaseCssClass' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Component.Control.Process-method-getBaseCssClass' class='name expandable'>getBaseCssClass</a>( <span class='pre'>extras</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Get full class name (with prefix) for current component ...</div><div class='long'><p>Get full class name (with prefix) for current component</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>extras</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>{String[]|String} class names without prefixCls and current component class name.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>class name with prefixCls and current component class name.</p>\n</div></li></ul></div></div></div><div id='method-getBaseCssClasses' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Component.Control.Process'>KISSY.Component.Control.Process</span><br/><a href='source/render4.html#KISSY-Component-Control-Process-method-getBaseCssClasses' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Component.Control.Process-method-getBaseCssClasses' class='name expandable'>getBaseCssClasses</a>( <span class='pre'>extras</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Get all css class name to be applied to the root element of this component for given extra class names. ...</div><div class='long'><p>Get all css class name to be applied to the root element of this component for given extra class names.\nthe css class names are prefixed with component name.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>extras</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>{String[]|String} class names without prefixCls and current component class name.</p>\n</div></li></ul></div></div></div><div id='method-getComponentConstructorByNode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Component.Control.Process'>KISSY.Component.Control.Process</span><br/><a href='source/render4.html#KISSY-Component-Control-Process-method-getComponentConstructorByNode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Component.Control.Process-method-getComponentConstructorByNode' class='name expandable'>getComponentConstructorByNode</a>( <span class='pre'>prefixCls, childNode</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Get component's constructor from KISSY Node. ...</div><div class='long'><p>Get component's constructor from KISSY Node.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>prefixCls</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>childNode</span> : <a href=\"#!/api/KISSY.NodeList\" rel=\"KISSY.NodeList\" class=\"docClass\">KISSY.NodeList</a><div class='sub-desc'><p>Child component's root node.</p>\n</div></li></ul></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static methods</h3><div id='static-method-extend' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Component.Control.Process'>KISSY.Component.Control.Process</span><br/><a href='source/render4.html#KISSY-Component-Control-Process-static-method-extend' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Component.Control.Process-static-method-extend' class='name expandable'>extend</a>( <span class='pre'>extensions, px, sx</span> ) : <a href=\"#!/api/KISSY.Component.Process\" rel=\"KISSY.Component.Process\" class=\"docClass\">KISSY.Component.Process</a><span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Create a new class which extends ComponentProcess . ...</div><div class='long'><p>Create a new class which extends ComponentProcess .</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>extensions</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a>[]<div class='sub-desc'><p>Class constructors for extending.</p>\n</div></li><li><span class='pre'>px</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Object to be mixed into new class 's prototype.</p>\n</div></li><li><span class='pre'>sx</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Object to be mixed into new class.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/KISSY.Component.Process\" rel=\"KISSY.Component.Process\" class=\"docClass\">KISSY.Component.Process</a></span><div class='sub-desc'><p>A new class which extends ComponentProcess .</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{"private":true}});