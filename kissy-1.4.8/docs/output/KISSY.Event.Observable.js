Ext.data.JsonP.KISSY_Event_Observable({"tagname":"class","name":"KISSY.Event.Observable","autodetected":{},"files":[{"filename":"observable.js","href":"observable.html#KISSY-Event-Observable"}],"private":true,"params":[{"tagname":"params","type":"Object","name":"cfg","doc":"<p>custom event's attribute</p>\n","html_type":"<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>"}],"members":[{"name":"type","tagname":"cfg","owner":"KISSY.Event.Observable","id":"cfg-type","meta":{}},{"name":"checkMemory","tagname":"method","owner":"KISSY.Event.Observable","id":"method-checkMemory","meta":{"private":true}},{"name":"findObserver","tagname":"method","owner":"KISSY.Event.Observable","id":"method-findObserver","meta":{}},{"name":"hasObserver","tagname":"method","owner":"KISSY.Event.Observable","id":"method-hasObserver","meta":{}},{"name":"removeObserver","tagname":"method","owner":"KISSY.Event.Observable","id":"method-removeObserver","meta":{}},{"name":"reset","tagname":"method","owner":"KISSY.Event.Observable","id":"method-reset","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-KISSY.Event.Observable","short_doc":"base custom event for registering and un-registering observer for specified event. ...","component":false,"superclasses":[],"subclasses":["KISSY.Event.CustomEvent.CustomEventObservable","KISSY.Event.DomEvent.Observable"],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Subclasses</h4><div class='dependency'><a href='#!/api/KISSY.Event.CustomEvent.CustomEventObservable' rel='KISSY.Event.CustomEvent.CustomEventObservable' class='docClass'>KISSY.Event.CustomEvent.CustomEventObservable</a></div><div class='dependency'><a href='#!/api/KISSY.Event.DomEvent.Observable' rel='KISSY.Event.DomEvent.Observable' class='docClass'>KISSY.Event.DomEvent.Observable</a></div><h4>Files</h4><div class='dependency'><a href='source/observable.html#KISSY-Event-Observable' target='_blank'>observable.js</a></div></pre><div class='doc-contents'><div class='rounded-box private-box'><p><strong>NOTE:</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p></div><p>base custom event for registering and un-registering observer for specified event.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cfg</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>custom event's attribute</p>\n</div></li></ul></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-type' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Event.Observable'>KISSY.Event.Observable</span><br/><a href='source/observable.html#KISSY-Event-Observable-cfg-type' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Event.Observable-cfg-type' class='name expandable'>type</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>current event type</p>\n</div><div class='long'><p>current event type</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-checkMemory' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Event.Observable'>KISSY.Event.Observable</span><br/><a href='source/observable.html#KISSY-Event-Observable-method-checkMemory' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Event.Observable-method-checkMemory' class='name expandable'>checkMemory</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>check memory after detach ...</div><div class='long'><p>check memory after detach</p>\n</div></div></div><div id='method-findObserver' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Event.Observable'>KISSY.Event.Observable</span><br/><a href='source/observable.html#KISSY-Event-Observable-method-findObserver' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Event.Observable-method-findObserver' class='name expandable'>findObserver</a>( <span class='pre'>observer</span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Search for a specified observer within current event's observers ...</div><div class='long'><p>Search for a specified observer within current event's observers</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>observer</span> : <a href=\"#!/api/KISSY.Event.Observer\" rel=\"KISSY.Event.Observer\" class=\"docClass\">KISSY.Event.Observer</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>observer's index in observers</p>\n</div></li></ul></div></div></div><div id='method-hasObserver' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Event.Observable'>KISSY.Event.Observable</span><br/><a href='source/observable.html#KISSY-Event-Observable-method-hasObserver' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Event.Observable-method-hasObserver' class='name expandable'>hasObserver</a>( <span class='pre'></span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>whether current event has observers ...</div><div class='long'><p>whether current event has observers</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-removeObserver' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Event.Observable'>KISSY.Event.Observable</span><br/><a href='source/observable.html#KISSY-Event-Observable-method-removeObserver' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Event.Observable-method-removeObserver' class='name expandable'>removeObserver</a>( <span class='pre'>observer</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>remove one observer from current event's observers ...</div><div class='long'><p>remove one observer from current event's observers</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>observer</span> : <a href=\"#!/api/KISSY.Event.Observer\" rel=\"KISSY.Event.Observer\" class=\"docClass\">KISSY.Event.Observer</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-reset' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='KISSY.Event.Observable'>KISSY.Event.Observable</span><br/><a href='source/observable.html#KISSY-Event-Observable-method-reset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/KISSY.Event.Observable-method-reset' class='name expandable'>reset</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>reset current event's status ...</div><div class='long'><p>reset current event's status</p>\n</div></div></div></div></div></div></div>","meta":{"private":true}});