const directives = new WeakMap(),
	isDirective = (t) => "function" == typeof t && directives.has(t),
	isCEPolyfill = void 0 !== window.customElements && void 0 !== window.customElements.polyfillWrapFlushCallback,
	removeNodes = (t, e, r = null) => {
		for (; e !== r; ) {
			const r = e.nextSibling;
			t.removeChild(e), (e = r);
		}
	},
	noChange = {},
	nothing = {},
	marker = `{{lit-${String(Math.random()).slice(2)}}}`,
	nodeMarker = `\x3c!--${marker}--\x3e`,
	markerRegex = new RegExp(`${marker}|${nodeMarker}`),
	boundAttributeSuffix = "$lit$";
class Template {
	constructor(t, e) {
		(this.parts = []), (this.element = e);
		const r = [],
			s = [],
			i = document.createTreeWalker(e.content, 133, null, !1);
		let o = 0,
			n = -1,
			a = 0;
		const {
			strings: l,
			values: { length: h },
		} = t;
		for (; a < h; ) {
			const t = i.nextNode();
			if (null !== t) {
				if ((n++, 1 === t.nodeType)) {
					if (t.hasAttributes()) {
						const e = t.attributes,
							{ length: r } = e;
						let s = 0;
						for (let t = 0; t < r; t++) endsWith(e[t].name, boundAttributeSuffix) && s++;
						for (; s-- > 0; ) {
							const e = l[a],
								r = lastAttributeNameRegex.exec(e)[2],
								s = r.toLowerCase() + boundAttributeSuffix,
								i = t.getAttribute(s);
							t.removeAttribute(s);
							const o = i.split(markerRegex);
							this.parts.push({ type: "attribute", index: n, name: r, strings: o }), (a += o.length - 1);
						}
					}
					"TEMPLATE" === t.tagName && (s.push(t), (i.currentNode = t.content));
				} else if (3 === t.nodeType) {
					const e = t.data;
					if (e.indexOf(marker) >= 0) {
						const s = t.parentNode,
							i = e.split(markerRegex),
							o = i.length - 1;
						for (let e = 0; e < o; e++) {
							let r,
								o = i[e];
							if ("" === o) r = createMarker();
							else {
								const t = lastAttributeNameRegex.exec(o);
								null !== t && endsWith(t[2], boundAttributeSuffix) && (o = o.slice(0, t.index) + t[1] + t[2].slice(0, -boundAttributeSuffix.length) + t[3]), (r = document.createTextNode(o));
							}
							s.insertBefore(r, t), this.parts.push({ type: "node", index: ++n });
						}
						"" === i[o] ? (s.insertBefore(createMarker(), t), r.push(t)) : (t.data = i[o]), (a += o);
					}
				} else if (8 === t.nodeType)
					if (t.data === marker) {
						const e = t.parentNode;
						(null !== t.previousSibling && n !== o) || (n++, e.insertBefore(createMarker(), t)), (o = n), this.parts.push({ type: "node", index: n }), null === t.nextSibling ? (t.data = "") : (r.push(t), n--), a++;
					} else {
						let e = -1;
						for (; -1 !== (e = t.data.indexOf(marker, e + 1)); ) this.parts.push({ type: "node", index: -1 }), a++;
					}
			} else i.currentNode = s.pop();
		}
		for (const t of r) t.parentNode.removeChild(t);
	}
}
const endsWith = (t, e) => {
		const r = t.length - e.length;
		return r >= 0 && t.slice(r) === e;
	},
	isTemplatePartActive = (t) => -1 !== t.index,
	createMarker = () => document.createComment(""),
	lastAttributeNameRegex = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
class TemplateInstance {
	constructor(t, e, r) {
		(this.__parts = []), (this.template = t), (this.processor = e), (this.options = r);
	}
	update(t) {
		let e = 0;
		for (const r of this.__parts) void 0 !== r && r.setValue(t[e]), e++;
		for (const t of this.__parts) void 0 !== t && t.commit();
	}
	_clone() {
		const t = isCEPolyfill ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0),
			e = [],
			r = this.template.parts,
			s = document.createTreeWalker(t, 133, null, !1);
		let i,
			o = 0,
			n = 0,
			a = s.nextNode();
		for (; o < r.length; )
			if (((i = r[o]), isTemplatePartActive(i))) {
				for (; n < i.index; ) n++, "TEMPLATE" === a.nodeName && (e.push(a), (s.currentNode = a.content)), null === (a = s.nextNode()) && ((s.currentNode = e.pop()), (a = s.nextNode()));
				if ("node" === i.type) {
					const t = this.processor.handleTextExpression(this.options);
					t.insertAfterNode(a.previousSibling), this.__parts.push(t);
				} else this.__parts.push(...this.processor.handleAttributeExpressions(a, i.name, i.strings, this.options));
				o++;
			} else this.__parts.push(void 0), o++;
		return isCEPolyfill && (document.adoptNode(t), customElements.upgrade(t)), t;
	}
}
const commentMarker = ` ${marker} `;
class TemplateResult {
	constructor(t, e, r, s) {
		(this.strings = t), (this.values = e), (this.type = r), (this.processor = s);
	}
	getHTML() {
		const t = this.strings.length - 1;
		let e = "",
			r = !1;
		for (let s = 0; s < t; s++) {
			const t = this.strings[s],
				i = t.lastIndexOf("\x3c!--");
			r = (i > -1 || r) && -1 === t.indexOf("--\x3e", i + 1);
			const o = lastAttributeNameRegex.exec(t);
			e += null === o ? t + (r ? commentMarker : nodeMarker) : t.substr(0, o.index) + o[1] + o[2] + boundAttributeSuffix + o[3] + marker;
		}
		return (e += this.strings[t]);
	}
	getTemplateElement() {
		const t = document.createElement("template");
		return (t.innerHTML = this.getHTML()), t;
	}
}
const isPrimitive = (t) => null === t || !("object" == typeof t || "function" == typeof t),
	isIterable = (t) => Array.isArray(t) || !(!t || !t[Symbol.iterator]);
class AttributeCommitter {
	constructor(t, e, r) {
		(this.dirty = !0), (this.element = t), (this.name = e), (this.strings = r), (this.parts = []);
		for (let t = 0; t < r.length - 1; t++) this.parts[t] = this._createPart();
	}
	_createPart() {
		return new AttributePart(this);
	}
	_getValue() {
		const t = this.strings,
			e = t.length - 1;
		let r = "";
		for (let s = 0; s < e; s++) {
			r += t[s];
			const e = this.parts[s];
			if (void 0 !== e) {
				const t = e.value;
				if (isPrimitive(t) || !isIterable(t)) r += "string" == typeof t ? t : String(t);
				else for (const e of t) r += "string" == typeof e ? e : String(e);
			}
		}
		return (r += t[e]);
	}
	commit() {
		this.dirty && ((this.dirty = !1), this.element.setAttribute(this.name, this._getValue()));
	}
}
class AttributePart {
	constructor(t) {
		(this.value = void 0), (this.committer = t);
	}
	setValue(t) {
		t === noChange || (isPrimitive(t) && t === this.value) || ((this.value = t), isDirective(t) || (this.committer.dirty = !0));
	}
	commit() {
		for (; isDirective(this.value); ) {
			const t = this.value;
			(this.value = noChange), t(this);
		}
		this.value !== noChange && this.committer.commit();
	}
}
class NodePart {
	constructor(t) {
		(this.value = void 0), (this.__pendingValue = void 0), (this.options = t);
	}
	appendInto(t) {
		(this.startNode = t.appendChild(createMarker())), (this.endNode = t.appendChild(createMarker()));
	}
	insertAfterNode(t) {
		(this.startNode = t), (this.endNode = t.nextSibling);
	}
	appendIntoPart(t) {
		t.__insert((this.startNode = createMarker())), t.__insert((this.endNode = createMarker()));
	}
	insertAfterPart(t) {
		t.__insert((this.startNode = createMarker())), (this.endNode = t.endNode), (t.endNode = this.startNode);
	}
	setValue(t) {
		this.__pendingValue = t;
	}
	commit() {
		for (; isDirective(this.__pendingValue); ) {
			const t = this.__pendingValue;
			(this.__pendingValue = noChange), t(this);
		}
		const t = this.__pendingValue;
		t !== noChange && (isPrimitive(t) ? t !== this.value && this.__commitText(t) : t instanceof TemplateResult ? this.__commitTemplateResult(t) : t instanceof Node ? this.__commitNode(t) : isIterable(t) ? this.__commitIterable(t) : t === nothing ? ((this.value = nothing), this.clear()) : this.__commitText(t));
	}
	__insert(t) {
		this.endNode.parentNode.insertBefore(t, this.endNode);
	}
	__commitNode(t) {
		this.value !== t && (this.clear(), this.__insert(t), (this.value = t));
	}
	__commitText(t) {
		const e = this.startNode.nextSibling,
			r = "string" == typeof (t = null == t ? "" : t) ? t : String(t);
		e === this.endNode.previousSibling && 3 === e.nodeType ? (e.data = r) : this.__commitNode(document.createTextNode(r)), (this.value = t);
	}
	__commitTemplateResult(t) {
		const e = this.options.templateFactory(t);
		if (this.value instanceof TemplateInstance && this.value.template === e) this.value.update(t.values);
		else {
			const r = new TemplateInstance(e, t.processor, this.options),
				s = r._clone();
			r.update(t.values), this.__commitNode(s), (this.value = r);
		}
	}
	__commitIterable(t) {
		Array.isArray(this.value) || ((this.value = []), this.clear());
		const e = this.value;
		let r,
			s = 0;
		for (const i of t) void 0 === (r = e[s]) && ((r = new NodePart(this.options)), e.push(r), 0 === s ? r.appendIntoPart(this) : r.insertAfterPart(e[s - 1])), r.setValue(i), r.commit(), s++;
		s < e.length && ((e.length = s), this.clear(r && r.endNode));
	}
	clear(t = this.startNode) {
		removeNodes(this.startNode.parentNode, t.nextSibling, this.endNode);
	}
}
class BooleanAttributePart {
	constructor(t, e, r) {
		if (((this.value = void 0), (this.__pendingValue = void 0), 2 !== r.length || "" !== r[0] || "" !== r[1])) throw new Error("Boolean attributes can only contain a single expression");
		(this.element = t), (this.name = e), (this.strings = r);
	}
	setValue(t) {
		this.__pendingValue = t;
	}
	commit() {
		for (; isDirective(this.__pendingValue); ) {
			const t = this.__pendingValue;
			(this.__pendingValue = noChange), t(this);
		}
		if (this.__pendingValue === noChange) return;
		const t = !!this.__pendingValue;
		this.value !== t && (t ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), (this.value = t)), (this.__pendingValue = noChange);
	}
}
class PropertyCommitter extends AttributeCommitter {
	constructor(t, e, r) {
		super(t, e, r), (this.single = 2 === r.length && "" === r[0] && "" === r[1]);
	}
	_createPart() {
		return new PropertyPart(this);
	}
	_getValue() {
		return this.single ? this.parts[0].value : super._getValue();
	}
	commit() {
		this.dirty && ((this.dirty = !1), (this.element[this.name] = this._getValue()));
	}
}
class PropertyPart extends AttributePart {}
let eventOptionsSupported = !1;
try {
	const t = {
		get capture() {
			return (eventOptionsSupported = !0), !1;
		},
	};
	window.addEventListener("test", t, t), window.removeEventListener("test", t, t);
} catch (t) {}
class EventPart {
	constructor(t, e, r) {
		(this.value = void 0), (this.__pendingValue = void 0), (this.element = t), (this.eventName = e), (this.eventContext = r), (this.__boundHandleEvent = (t) => this.handleEvent(t));
	}
	setValue(t) {
		this.__pendingValue = t;
	}
	commit() {
		for (; isDirective(this.__pendingValue); ) {
			const t = this.__pendingValue;
			(this.__pendingValue = noChange), t(this);
		}
		if (this.__pendingValue === noChange) return;
		const t = this.__pendingValue,
			e = this.value,
			r = null == t || (null != e && (t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive)),
			s = null != t && (null == e || r);
		r && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), s && ((this.__options = getOptions(t)), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), (this.value = t), (this.__pendingValue = noChange);
	}
	handleEvent(t) {
		"function" == typeof this.value ? this.value.call(this.eventContext || this.element, t) : this.value.handleEvent(t);
	}
}
const getOptions = (t) => t && (eventOptionsSupported ? { capture: t.capture, passive: t.passive, once: t.once } : t.capture);
class DefaultTemplateProcessor {
	handleAttributeExpressions(t, e, r, s) {
		const i = e[0];
		if ("." === i) {
			return new PropertyCommitter(t, e.slice(1), r).parts;
		}
		return "@" === i ? [new EventPart(t, e.slice(1), s.eventContext)] : "?" === i ? [new BooleanAttributePart(t, e.slice(1), r)] : new AttributeCommitter(t, e, r).parts;
	}
	handleTextExpression(t) {
		return new NodePart(t);
	}
}
const defaultTemplateProcessor = new DefaultTemplateProcessor();
function templateFactory(t) {
	let e = templateCaches.get(t.type);
	void 0 === e && ((e = { stringsArray: new WeakMap(), keyString: new Map() }), templateCaches.set(t.type, e));
	let r = e.stringsArray.get(t.strings);
	if (void 0 !== r) return r;
	const s = t.strings.join(marker);
	return void 0 === (r = e.keyString.get(s)) && ((r = new Template(t, t.getTemplateElement())), e.keyString.set(s, r)), e.stringsArray.set(t.strings, r), r;
}
const templateCaches = new Map(),
	parts = new WeakMap(),
	render = (t, e, r) => {
		let s = parts.get(e);
		void 0 === s && (removeNodes(e, e.firstChild), parts.set(e, (s = new NodePart(Object.assign({ templateFactory: templateFactory }, r)))), s.appendInto(e)), s.setValue(t), s.commit();
	};
(window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.1.2");
const html = (t, ...e) => new TemplateResult(t, e, "html", defaultTemplateProcessor),
	walkerNodeFilter = 133;
function removeNodesFromTemplate(t, e) {
	const {
			element: { content: r },
			parts: s,
		} = t,
		i = document.createTreeWalker(r, walkerNodeFilter, null, !1);
	let o = nextActiveIndexInTemplateParts(s),
		n = s[o],
		a = -1,
		l = 0;
	const h = [];
	let u = null;
	for (; i.nextNode(); ) {
		a++;
		const t = i.currentNode;
		for (t.previousSibling === u && (u = null), e.has(t) && (h.push(t), null === u && (u = t)), null !== u && l++; void 0 !== n && n.index === a; ) (n.index = null !== u ? -1 : n.index - l), (n = s[(o = nextActiveIndexInTemplateParts(s, o))]);
	}
	h.forEach((t) => t.parentNode.removeChild(t));
}
const countNodes = (t) => {
		let e = 11 === t.nodeType ? 0 : 1;
		const r = document.createTreeWalker(t, walkerNodeFilter, null, !1);
		for (; r.nextNode(); ) e++;
		return e;
	},
	nextActiveIndexInTemplateParts = (t, e = -1) => {
		for (let r = e + 1; r < t.length; r++) {
			const e = t[r];
			if (isTemplatePartActive(e)) return r;
		}
		return -1;
	};
function insertNodeIntoTemplate(t, e, r = null) {
	const {
		element: { content: s },
		parts: i,
	} = t;
	if (null == r) return void s.appendChild(e);
	const o = document.createTreeWalker(s, walkerNodeFilter, null, !1);
	let n = nextActiveIndexInTemplateParts(i),
		a = 0,
		l = -1;
	for (; o.nextNode(); ) {
		for (l++, o.currentNode === r && ((a = countNodes(e)), r.parentNode.insertBefore(e, r)); -1 !== n && i[n].index === l; ) {
			if (a > 0) {
				for (; -1 !== n; ) (i[n].index += a), (n = nextActiveIndexInTemplateParts(i, n));
				return;
			}
			n = nextActiveIndexInTemplateParts(i, n);
		}
	}
}
const getTemplateCacheKey = (t, e) => `${t}--${e}`;
let compatibleShadyCSSVersion = !0;
void 0 === window.ShadyCSS ? (compatibleShadyCSSVersion = !1) : void 0 === window.ShadyCSS.prepareTemplateDom && (console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."), (compatibleShadyCSSVersion = !1));
const shadyTemplateFactory = (t) => (e) => {
		const r = getTemplateCacheKey(e.type, t);
		let s = templateCaches.get(r);
		void 0 === s && ((s = { stringsArray: new WeakMap(), keyString: new Map() }), templateCaches.set(r, s));
		let i = s.stringsArray.get(e.strings);
		if (void 0 !== i) return i;
		const o = e.strings.join(marker);
		if (void 0 === (i = s.keyString.get(o))) {
			const r = e.getTemplateElement();
			compatibleShadyCSSVersion && window.ShadyCSS.prepareTemplateDom(r, t), (i = new Template(e, r)), s.keyString.set(o, i);
		}
		return s.stringsArray.set(e.strings, i), i;
	},
	TEMPLATE_TYPES = ["html", "svg"],
	removeStylesFromLitTemplates = (t) => {
		TEMPLATE_TYPES.forEach((e) => {
			const r = templateCaches.get(getTemplateCacheKey(e, t));
			void 0 !== r &&
				r.keyString.forEach((t) => {
					const {
							element: { content: e },
						} = t,
						r = new Set();
					Array.from(e.querySelectorAll("style")).forEach((t) => {
						r.add(t);
					}),
						removeNodesFromTemplate(t, r);
				});
		});
	},
	shadyRenderSet = new Set(),
	prepareTemplateStyles = (t, e, r) => {
		shadyRenderSet.add(t);
		const s = r ? r.element : document.createElement("template"),
			i = e.querySelectorAll("style"),
			{ length: o } = i;
		if (0 === o) return void window.ShadyCSS.prepareTemplateStyles(s, t);
		const n = document.createElement("style");
		for (let t = 0; t < o; t++) {
			const e = i[t];
			e.parentNode.removeChild(e), (n.textContent += e.textContent);
		}
		removeStylesFromLitTemplates(t);
		const a = s.content;
		r ? insertNodeIntoTemplate(r, n, a.firstChild) : a.insertBefore(n, a.firstChild), window.ShadyCSS.prepareTemplateStyles(s, t);
		const l = a.querySelector("style");
		if (window.ShadyCSS.nativeShadow && null !== l) e.insertBefore(l.cloneNode(!0), e.firstChild);
		else if (r) {
			a.insertBefore(n, a.firstChild);
			const t = new Set();
			t.add(n), removeNodesFromTemplate(r, t);
		}
	},
	render$1 = (t, e, r) => {
		if (!r || "object" != typeof r || !r.scopeName) throw new Error("The `scopeName` option is required.");
		const s = r.scopeName,
			i = parts.has(e),
			o = compatibleShadyCSSVersion && 11 === e.nodeType && !!e.host,
			n = o && !shadyRenderSet.has(s),
			a = n ? document.createDocumentFragment() : e;
		if ((render(t, a, Object.assign({ templateFactory: shadyTemplateFactory(s) }, r)), n)) {
			const t = parts.get(a);
			parts.delete(a);
			const r = t.value instanceof TemplateInstance ? t.value.template : void 0;
			prepareTemplateStyles(s, a, r), removeNodes(e, e.firstChild), e.appendChild(a), parts.set(e, t);
		}
		!i && o && window.ShadyCSS.styleElement(e.host);
	};
var _a;
window.JSCompiler_renameProperty = (t, e) => t;
const defaultConverter = {
		toAttribute(t, e) {
			switch (e) {
				case Boolean:
					return t ? "" : null;
				case Object:
				case Array:
					return null == t ? t : JSON.stringify(t);
			}
			return t;
		},
		fromAttribute(t, e) {
			switch (e) {
				case Boolean:
					return null !== t;
				case Number:
					return null === t ? null : Number(t);
				case Object:
				case Array:
					return JSON.parse(t);
			}
			return t;
		},
	},
	notEqual = (t, e) => e !== t && (e == e || t == t),
	defaultPropertyDeclaration = { attribute: !0, type: String, converter: defaultConverter, reflect: !1, hasChanged: notEqual },
	microtaskPromise = Promise.resolve(!0),
	STATE_HAS_UPDATED = 1,
	STATE_UPDATE_REQUESTED = 4,
	STATE_IS_REFLECTING_TO_ATTRIBUTE = 8,
	STATE_IS_REFLECTING_TO_PROPERTY = 16,
	STATE_HAS_CONNECTED = 32,
	finalized = "finalized";
class UpdatingElement extends HTMLElement {
	constructor() {
		super(), (this._updateState = 0), (this._instanceProperties = void 0), (this._updatePromise = microtaskPromise), (this._hasConnectedResolver = void 0), (this._changedProperties = new Map()), (this._reflectingProperties = void 0), this.initialize();
	}
	static get observedAttributes() {
		this.finalize();
		const t = [];
		return (
			this._classProperties.forEach((e, r) => {
				const s = this._attributeNameForProperty(r, e);
				void 0 !== s && (this._attributeToPropertyMap.set(s, r), t.push(s));
			}),
			t
		);
	}
	static _ensureClassProperties() {
		if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
			this._classProperties = new Map();
			const t = Object.getPrototypeOf(this)._classProperties;
			void 0 !== t && t.forEach((t, e) => this._classProperties.set(e, t));
		}
	}
	static createProperty(t, e = defaultPropertyDeclaration) {
		if ((this._ensureClassProperties(), this._classProperties.set(t, e), e.noAccessor || this.prototype.hasOwnProperty(t))) return;
		const r = "symbol" == typeof t ? Symbol() : `__${t}`;
		Object.defineProperty(this.prototype, t, {
			get() {
				return this[r];
			},
			set(e) {
				const s = this[t];
				(this[r] = e), this._requestUpdate(t, s);
			},
			configurable: !0,
			enumerable: !0,
		});
	}
	static finalize() {
		const t = Object.getPrototypeOf(this);
		if ((t.hasOwnProperty(finalized) || t.finalize(), (this[finalized] = !0), this._ensureClassProperties(), (this._attributeToPropertyMap = new Map()), this.hasOwnProperty(JSCompiler_renameProperty("properties", this)))) {
			const t = this.properties,
				e = [...Object.getOwnPropertyNames(t), ...("function" == typeof Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t) : [])];
			for (const r of e) this.createProperty(r, t[r]);
		}
	}
	static _attributeNameForProperty(t, e) {
		const r = e.attribute;
		return !1 === r ? void 0 : "string" == typeof r ? r : "string" == typeof t ? t.toLowerCase() : void 0;
	}
	static _valueHasChanged(t, e, r = notEqual) {
		return r(t, e);
	}
	static _propertyValueFromAttribute(t, e) {
		const r = e.type,
			s = e.converter || defaultConverter,
			i = "function" == typeof s ? s : s.fromAttribute;
		return i ? i(t, r) : t;
	}
	static _propertyValueToAttribute(t, e) {
		if (void 0 === e.reflect) return;
		const r = e.type,
			s = e.converter;
		return ((s && s.toAttribute) || defaultConverter.toAttribute)(t, r);
	}
	initialize() {
		this._saveInstanceProperties(), this._requestUpdate();
	}
	_saveInstanceProperties() {
		this.constructor._classProperties.forEach((t, e) => {
			if (this.hasOwnProperty(e)) {
				const t = this[e];
				delete this[e], this._instanceProperties || (this._instanceProperties = new Map()), this._instanceProperties.set(e, t);
			}
		});
	}
	_applyInstanceProperties() {
		this._instanceProperties.forEach((t, e) => (this[e] = t)), (this._instanceProperties = void 0);
	}
	connectedCallback() {
		(this._updateState = this._updateState | STATE_HAS_CONNECTED), this._hasConnectedResolver && (this._hasConnectedResolver(), (this._hasConnectedResolver = void 0));
	}
	disconnectedCallback() {}
	attributeChangedCallback(t, e, r) {
		e !== r && this._attributeToProperty(t, r);
	}
	_propertyToAttribute(t, e, r = defaultPropertyDeclaration) {
		const s = this.constructor,
			i = s._attributeNameForProperty(t, r);
		if (void 0 !== i) {
			const t = s._propertyValueToAttribute(e, r);
			if (void 0 === t) return;
			(this._updateState = this._updateState | STATE_IS_REFLECTING_TO_ATTRIBUTE), null == t ? this.removeAttribute(i) : this.setAttribute(i, t), (this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_ATTRIBUTE);
		}
	}
	_attributeToProperty(t, e) {
		if (this._updateState & STATE_IS_REFLECTING_TO_ATTRIBUTE) return;
		const r = this.constructor,
			s = r._attributeToPropertyMap.get(t);
		if (void 0 !== s) {
			const t = r._classProperties.get(s) || defaultPropertyDeclaration;
			(this._updateState = this._updateState | STATE_IS_REFLECTING_TO_PROPERTY), (this[s] = r._propertyValueFromAttribute(e, t)), (this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_PROPERTY);
		}
	}
	_requestUpdate(t, e) {
		let r = !0;
		if (void 0 !== t) {
			const s = this.constructor,
				i = s._classProperties.get(t) || defaultPropertyDeclaration;
			s._valueHasChanged(this[t], e, i.hasChanged) ? (this._changedProperties.has(t) || this._changedProperties.set(t, e), !0 !== i.reflect || this._updateState & STATE_IS_REFLECTING_TO_PROPERTY || (void 0 === this._reflectingProperties && (this._reflectingProperties = new Map()), this._reflectingProperties.set(t, i))) : (r = !1);
		}
		!this._hasRequestedUpdate && r && this._enqueueUpdate();
	}
	requestUpdate(t, e) {
		return this._requestUpdate(t, e), this.updateComplete;
	}
	async _enqueueUpdate() {
		let t, e;
		this._updateState = this._updateState | STATE_UPDATE_REQUESTED;
		const r = this._updatePromise;
		this._updatePromise = new Promise((r, s) => {
			(t = r), (e = s);
		});
		try {
			await r;
		} catch (t) {}
		this._hasConnected || (await new Promise((t) => (this._hasConnectedResolver = t)));
		try {
			const t = this.performUpdate();
			null != t && (await t);
		} catch (t) {
			e(t);
		}
		t(!this._hasRequestedUpdate);
	}
	get _hasConnected() {
		return this._updateState & STATE_HAS_CONNECTED;
	}
	get _hasRequestedUpdate() {
		return this._updateState & STATE_UPDATE_REQUESTED;
	}
	get hasUpdated() {
		return this._updateState & STATE_HAS_UPDATED;
	}
	performUpdate() {
		this._instanceProperties && this._applyInstanceProperties();
		let t = !1;
		const e = this._changedProperties;
		try {
			(t = this.shouldUpdate(e)) && this.update(e);
		} catch (e) {
			throw ((t = !1), e);
		} finally {
			this._markUpdated();
		}
		t && (this._updateState & STATE_HAS_UPDATED || ((this._updateState = this._updateState | STATE_HAS_UPDATED), this.firstUpdated(e)), this.updated(e));
	}
	_markUpdated() {
		(this._changedProperties = new Map()), (this._updateState = this._updateState & ~STATE_UPDATE_REQUESTED);
	}
	get updateComplete() {
		return this._getUpdateComplete();
	}
	_getUpdateComplete() {
		return this._updatePromise;
	}
	shouldUpdate(t) {
		return !0;
	}
	update(t) {
		void 0 !== this._reflectingProperties && this._reflectingProperties.size > 0 && (this._reflectingProperties.forEach((t, e) => this._propertyToAttribute(e, this[e], t)), (this._reflectingProperties = void 0));
	}
	updated(t) {}
	firstUpdated(t) {}
}
UpdatingElement[(_a = finalized)] = !0;
const supportsAdoptingStyleSheets = "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
	constructionToken = Symbol();
class CSSResult {
	constructor(t, e) {
		if (e !== constructionToken) throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
		this.cssText = t;
	}
	get styleSheet() {
		return void 0 === this._styleSheet && (supportsAdoptingStyleSheets ? ((this._styleSheet = new CSSStyleSheet()), this._styleSheet.replaceSync(this.cssText)) : (this._styleSheet = null)), this._styleSheet;
	}
	toString() {
		return this.cssText;
	}
}
const textFromCSSResult = (t) => {
		if (t instanceof CSSResult) return t.cssText;
		if ("number" == typeof t) return t;
		throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`);
	},
	css = (t, ...e) => {
		const r = e.reduce((e, r, s) => e + textFromCSSResult(r) + t[s + 1], t[0]);
		return new CSSResult(r, constructionToken);
	};
function arrayFlat(t, e = []) {
	for (let r = 0, s = t.length; r < s; r++) {
		const s = t[r];
		Array.isArray(s) ? arrayFlat(s, e) : e.push(s);
	}
	return e;
}
(window.litElementVersions || (window.litElementVersions = [])).push("2.2.1");
const flattenStyles = (t) => (t.flat ? t.flat(1 / 0) : arrayFlat(t));
class LitElement extends UpdatingElement {
	static finalize() {
		super.finalize.call(this), (this._styles = this.hasOwnProperty(JSCompiler_renameProperty("styles", this)) ? this._getUniqueStyles() : this._styles || []);
	}
	static _getUniqueStyles() {
		const t = this.styles,
			e = [];
		if (Array.isArray(t)) {
			flattenStyles(t)
				.reduceRight((t, e) => (t.add(e), t), new Set())
				.forEach((t) => e.unshift(t));
		} else t && e.push(t);
		return e;
	}
	initialize() {
		super.initialize(), (this.renderRoot = this.createRenderRoot()), window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot && this.adoptStyles();
	}
	createRenderRoot() {
		return this.attachShadow({ mode: "open" });
	}
	adoptStyles() {
		const t = this.constructor._styles;
		0 !== t.length &&
			(void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow
				? supportsAdoptingStyleSheets
					? (this.renderRoot.adoptedStyleSheets = t.map((t) => t.styleSheet))
					: (this._needsShimAdoptedStyleSheets = !0)
				: window.ShadyCSS.ScopingShim.prepareAdoptedCssText(
						t.map((t) => t.cssText),
						this.localName
				  ));
	}
	connectedCallback() {
		super.connectedCallback(), this.hasUpdated && void 0 !== window.ShadyCSS && window.ShadyCSS.styleElement(this);
	}
	update(t) {
		super.update(t);
		const e = this.render();
		e instanceof TemplateResult && this.constructor.render(e, this.renderRoot, { scopeName: this.localName, eventContext: this }),
			this._needsShimAdoptedStyleSheets &&
				((this._needsShimAdoptedStyleSheets = !1),
				this.constructor._styles.forEach((t) => {
					const e = document.createElement("style");
					(e.textContent = t.cssText), this.renderRoot.appendChild(e);
				}));
	}
	render() {}
}
(LitElement.finalized = !0), (LitElement.render = render$1);
class QRUtil {
	constructor(t, e) {
		(this.QRMode = t),
			(this.QRMaskPattern = e),
			(this.PATTERN_POSITION_TABLE = [
				[],
				[6, 18],
				[6, 22],
				[6, 26],
				[6, 30],
				[6, 34],
				[6, 22, 38],
				[6, 24, 42],
				[6, 26, 46],
				[6, 28, 50],
				[6, 30, 54],
				[6, 32, 58],
				[6, 34, 62],
				[6, 26, 46, 66],
				[6, 26, 48, 70],
				[6, 26, 50, 74],
				[6, 30, 54, 78],
				[6, 30, 56, 82],
				[6, 30, 58, 86],
				[6, 34, 62, 90],
				[6, 28, 50, 72, 94],
				[6, 26, 50, 74, 98],
				[6, 30, 54, 78, 102],
				[6, 28, 54, 80, 106],
				[6, 32, 58, 84, 110],
				[6, 30, 58, 86, 114],
				[6, 34, 62, 90, 118],
				[6, 26, 50, 74, 98, 122],
				[6, 30, 54, 78, 102, 126],
				[6, 26, 52, 78, 104, 130],
				[6, 30, 56, 82, 108, 134],
				[6, 34, 60, 86, 112, 138],
				[6, 30, 58, 86, 114, 142],
				[6, 34, 62, 90, 118, 146],
				[6, 30, 54, 78, 102, 126, 150],
				[6, 24, 50, 76, 102, 128, 154],
				[6, 28, 54, 80, 106, 132, 158],
				[6, 32, 58, 84, 110, 136, 162],
				[6, 26, 54, 82, 110, 138, 166],
				[6, 30, 58, 86, 114, 142, 170],
			]),
			(this.G15 = 1335),
			(this.G18 = 7973),
			(this.G15_MASK = 21522);
	}
	getBCHDigit(t) {
		let e = 0;
		for (; 0 != t; ) (e += 1), (t >>>= 1);
		return e;
	}
	getBCHTypeInfo(t) {
		let e = t << 10;
		for (; this.getBCHDigit(e) - this.getBCHDigit(this.G15) >= 0; ) e ^= this.G15 << (this.getBCHDigit(e) - this.getBCHDigit(this.G15));
		return ((t << 10) | e) ^ this.G15_MASK;
	}
	getBCHTypeNumber(t) {
		let e = t << 12;
		for (; this.getBCHDigit(e) - this.getBCHDigit(this.G18) >= 0; ) e ^= this.G18 << (this.getBCHDigit(e) - this.getBCHDigit(this.G18));
		return (t << 12) | e;
	}
	getPatternPosition(t) {
		return this.PATTERN_POSITION_TABLE[t - 1];
	}
	getMaskFunction(t) {
		switch (t) {
			case this.QRMaskPattern.PATTERN000:
				return function (t, e) {
					return (t + e) % 2 == 0;
				};
			case this.QRMaskPattern.PATTERN001:
				return function (t, e) {
					return t % 2 == 0;
				};
			case this.QRMaskPattern.PATTERN010:
				return function (t, e) {
					return e % 3 == 0;
				};
			case this.QRMaskPattern.PATTERN011:
				return function (t, e) {
					return (t + e) % 3 == 0;
				};
			case this.QRMaskPattern.PATTERN100:
				return function (t, e) {
					return (Math.floor(t / 2) + Math.floor(e / 3)) % 2 == 0;
				};
			case this.QRMaskPattern.PATTERN101:
				return function (t, e) {
					return ((t * e) % 2) + ((t * e) % 3) == 0;
				};
			case this.QRMaskPattern.PATTERN110:
				return function (t, e) {
					return (((t * e) % 2) + ((t * e) % 3)) % 2 == 0;
				};
			case this.QRMaskPattern.PATTERN111:
				return function (t, e) {
					return (((t * e) % 3) + ((t + e) % 2)) % 2 == 0;
				};
			default:
				throw new Error("bad maskPattern:" + t);
		}
	}
	bits1to9(t) {
		switch (t) {
			case this.QRMode.MODE_NUMBER:
				return 10;
			case this.QRMode.MODE_ALPHA_NUM:
				return 9;
			case this.QRMode.MODE_8BIT_BYTE:
			case this.QRMode.MODE_KANJI:
				return 8;
			default:
				throw new Error("mode:" + t);
		}
	}
	bits10to26(t) {
		switch (t) {
			case this.QRMode.MODE_NUMBER:
				return 12;
			case this.QRMode.MODE_ALPHA_NUM:
				return 11;
			case this.QRMode.MODE_8BIT_BYTE:
				return 16;
			case this.QRMode.MODE_KANJI:
				return 10;
			default:
				throw new Error("mode:" + t);
		}
	}
	bits27to40(t) {
		switch (t) {
			case this.QRMode.MODE_NUMBER:
				return 14;
			case this.QRMode.MODE_ALPHA_NUM:
				return 13;
			case this.QRMode.MODE_8BIT_BYTE:
				return 16;
			case this.QRMode.MODE_KANJI:
				return 12;
			default:
				throw new Error("mode:" + t);
		}
	}
	getLengthInBits(t, e) {
		if (e >= 1 && e < 10) return this.bits1to9(t);
		if (e < 27) return this.bits10to26(t);
		if (e < 41) return this.bits27to40(t);
		throw new Error("type:" + e);
	}
	level1a(t, e, r, s) {
		let i = 0,
			o = t.isDark(s, r);
		for (let n = -1; n <= 1; n += 1) if (!(s + n < 0 || e <= s + n)) for (let a = -1; a <= 1; a += 1) r + a < 0 || e <= r + a || (0 === n && 0 === a) || (o === t.isDark(s + n, r + a) && (i += 1));
		return i;
	}
	level1(t, e, r) {
		let s;
		for (let i = 0; i < e; i += 1) for (let o = 0; o < e; o += 1) (s = this.level1a(t, e, i, o)) > 5 && (r += 3 + s - 5);
		return r;
	}
	level2(t, e, r) {
		for (let s = 0; s < e - 1; s += 1)
			for (let i = 0; i < e - 1; i += 1) {
				let e = 0;
				t.isDark(s, i) && (e += 1), t.isDark(s + 1, i) && (e += 1), t.isDark(s, i + 1) && (e += 1), t.isDark(s + 1, i + 1) && (e += 1), (0 !== e && 4 !== e) || (r += 3);
			}
		return r;
	}
	level3a(t, e, r) {
		for (let s = 0; s < e; s += 1) for (let i = 0; i < e - 6; i += 1) t.isDark(s, i) && !t.isDark(s, i + 1) && t.isDark(s, i + 2) && t.isDark(s, i + 3) && t.isDark(s, i + 4) && !t.isDark(s, i + 5) && t.isDark(s, i + 6) && (r += 40);
		return r;
	}
	level3b(t, e, r) {
		for (let s = 0; s < e; s += 1) for (let i = 0; i < e - 6; i += 1) t.isDark(i, s) && !t.isDark(i + 1, s) && t.isDark(i + 2, s) && t.isDark(i + 3, s) && t.isDark(i + 4, s) && !t.isDark(i + 5, s) && t.isDark(i + 6, s) && (r += 40);
		return r;
	}
	level4(t, e) {
		let r = 0;
		for (let s = 0; s < e; s += 1) for (let i = 0; i < e; i += 1) t.isDark(i, s) && (r += 1);
		return r;
	}
	getLostPoint(t) {
		let e = t.getModuleCount(),
			r = 0;
		(r = this.level1(t, e, r)), (r = this.level2(t, e, r)), (r = this.level3a(t, e, r)), (r = this.level3b(t, e, r));
		let s = this.level4(t, e);
		return (r += 10 * (Math.abs((100 * s) / e / e - 50) / 5));
	}
}
class QRMath {
	constructor() {
		(this.EXP_TABLE = new Array(256)), (this.LOG_TABLE = new Array(256));
		for (let t = 0; t < 8; t += 1) this.EXP_TABLE[t] = 1 << t;
		for (let t = 8; t < 256; t += 1) this.EXP_TABLE[t] = this.EXP_TABLE[t - 4] ^ this.EXP_TABLE[t - 5] ^ this.EXP_TABLE[t - 6] ^ this.EXP_TABLE[t - 8];
		for (let t = 0; t < 255; t += 1) this.LOG_TABLE[this.EXP_TABLE[t]] = t;
	}
	glog(t) {
		if (t < 1) throw new Error("glog(" + t + ")");
		return this.LOG_TABLE[t];
	}
	gexp(t) {
		for (; t < 0; ) t += 255;
		for (; t >= 256; ) t -= 255;
		return this.EXP_TABLE[t];
	}
}
class QRRSBlock {
	constructor(t) {
		(this.QRErrorCorrectLevel = t),
			(this.RS_BLOCK_TABLE = [
				[1, 26, 19],
				[1, 26, 16],
				[1, 26, 13],
				[1, 26, 9],
				[1, 44, 34],
				[1, 44, 28],
				[1, 44, 22],
				[1, 44, 16],
				[1, 70, 55],
				[1, 70, 44],
				[2, 35, 17],
				[2, 35, 13],
				[1, 100, 80],
				[2, 50, 32],
				[2, 50, 24],
				[4, 25, 9],
				[1, 134, 108],
				[2, 67, 43],
				[2, 33, 15, 2, 34, 16],
				[2, 33, 11, 2, 34, 12],
				[2, 86, 68],
				[4, 43, 27],
				[4, 43, 19],
				[4, 43, 15],
				[2, 98, 78],
				[4, 49, 31],
				[2, 32, 14, 4, 33, 15],
				[4, 39, 13, 1, 40, 14],
				[2, 121, 97],
				[2, 60, 38, 2, 61, 39],
				[4, 40, 18, 2, 41, 19],
				[4, 40, 14, 2, 41, 15],
				[2, 146, 116],
				[3, 58, 36, 2, 59, 37],
				[4, 36, 16, 4, 37, 17],
				[4, 36, 12, 4, 37, 13],
				[2, 86, 68, 2, 87, 69],
				[4, 69, 43, 1, 70, 44],
				[6, 43, 19, 2, 44, 20],
				[6, 43, 15, 2, 44, 16],
			]);
	}
	qrRSBlock(t, e) {
		let r = {};
		return (r.totalCount = t), (r.dataCount = e), r;
	}
	getRsBlockTable(t, e) {
		switch (e) {
			case this.QRErrorCorrectLevel.L:
				return this.RS_BLOCK_TABLE[4 * (t - 1) + 0];
			case this.QRErrorCorrectLevel.M:
				return this.RS_BLOCK_TABLE[4 * (t - 1) + 1];
			case this.QRErrorCorrectLevel.Q:
				return this.RS_BLOCK_TABLE[4 * (t - 1) + 2];
			case this.QRErrorCorrectLevel.H:
				return this.RS_BLOCK_TABLE[4 * (t - 1) + 3];
			default:
				return;
		}
	}
	getRSBlocks(t, e) {
		let r = this.getRsBlockTable(t, e);
		if (void 0 === r) throw new Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + e);
		let s = r.length / 3,
			i = new Array();
		for (let t = 0; t < s; t += 1) {
			let e = r[3 * t + 0],
				s = r[3 * t + 1],
				o = r[3 * t + 2];
			for (let t = 0; t < e; t += 1) i.push(this.qrRSBlock(s, o));
		}
		return i;
	}
}
class QRCodeGenerator {
	constructor(t, e) {
		(this.QRMode = { MODE_NUMBER: 1, MODE_ALPHA_NUM: 2, MODE_8BIT_BYTE: 4, MODE_KANJI: 8 }),
			(this.QRErrorCorrectLevel = { L: 1, M: 0, Q: 3, H: 2 }),
			(this.QRMaskPattern = { PATTERN000: 0, PATTERN001: 1, PATTERN010: 2, PATTERN011: 3, PATTERN100: 4, PATTERN101: 5, PATTERN110: 6, PATTERN111: 7 }),
			(this.PAD0 = 236),
			(this.PAD1 = 17),
			(this._typeNumber = t),
			(this._errorCorrectLevel = this.QRErrorCorrectLevel[e]),
			(this._modules = null),
			(this._moduleCount = 0),
			(this._dataCache = null),
			(this._dataList = new Array()),
			(this.objQRSBlock = new QRRSBlock(this.QRErrorCorrectLevel)),
			(this.objQRMath = new QRMath()),
			(this.objQRUtil = new QRUtil(this.QRMode, this.QRMaskPattern));
	}
	qrPolynomial(t, e) {
		if (void 0 === t.length) throw new Error(t.length + "/" + e);
		let r = (function () {
				let r = 0;
				for (; r < t.length && 0 === t[r]; ) r += 1;
				let s = new Array(t.length - r + e);
				for (let e = 0; e < t.length - r; e += 1) s[e] = t[e + r];
				return s;
			})(),
			s = {
				getAt: function (t) {
					return r[t];
				},
				getLength: () => r.length,
			};
		return (
			(s.multiply = (e) => {
				t = new Array(s.getLength() + e.getLength() - 1);
				for (let r = 0; r < s.getLength(); r += 1) for (let i = 0; i < e.getLength(); i += 1) t[r + i] ^= this.objQRMath.gexp(this.objQRMath.glog(s.getAt(r)) + this.objQRMath.glog(e.getAt(i)));
				return this.qrPolynomial(t, 0);
			}),
			(s.mod = (e) => {
				if (s.getLength() - e.getLength() < 0) return s;
				let r = this.objQRMath.glog(s.getAt(0)) - this.objQRMath.glog(e.getAt(0));
				t = new Array(s.getLength());
				for (let e = 0; e < s.getLength(); e += 1) t[e] = s.getAt(e);
				for (let s = 0; s < e.getLength(); s += 1) t[s] ^= this.objQRMath.gexp(this.objQRMath.glog(e.getAt(s)) + r);
				return this.qrPolynomial(t, 0).mod(e);
			}),
			s
		);
	}
	getModules(t) {
		let e = new Array(t);
		for (let r = 0; r < t; r += 1) {
			e[r] = new Array(t);
			for (let s = 0; s < t; s += 1) e[r][s] = null;
		}
		return e;
	}
	makeImpl(t, e) {
		(this._moduleCount = 4 * this._typeNumber + 17),
			(this._modules = this.getModules(this._moduleCount)),
			this.setupPositionProbePattern(0, 0),
			this.setupPositionProbePattern(this._moduleCount - 7, 0),
			this.setupPositionProbePattern(0, this._moduleCount - 7),
			this.setupPositionAdjustPattern(),
			this.setupTimingPattern(),
			this.setupTypeInfo(t, e),
			this._typeNumber >= 7 && this.setupTypeNumber(t),
			null === this._dataCache && (this._dataCache = this.createData(this._typeNumber, this._errorCorrectLevel, this._dataList)),
			this.mapData(this._dataCache, e);
	}
	conditionRC1(t, e) {
		return t >= 0 && t <= 6 && (0 === e || 6 === e);
	}
	conditionRC2(t, e) {
		return e >= 0 && e <= 6 && (0 === t || 6 === t);
	}
	conditionRC3(t, e) {
		return t >= 2 && t <= 4 && e >= 2 && e <= 4;
	}
	calcByRAndC(t, e, r, s) {
		this.conditionRC1(r, s) || this.conditionRC2(r, s) || this.conditionRC3(r, s) ? (this._modules[t + r][e + s] = !0) : (this._modules[t + r][e + s] = !1);
	}
	setupPositionProbePattern(t, e) {
		for (let r = -1; r <= 7; r += 1) if (!(t + r <= -1 || this._moduleCount <= t + r)) for (let s = -1; s <= 7; s += 1) e + s <= -1 || this._moduleCount <= e + s || this.calcByRAndC(t, e, r, s);
	}
	getBestMaskPattern() {
		let t = 0,
			e = 0;
		for (let r = 0; r < 8; r += 1) {
			this.makeImpl(!0, r);
			let s = this.objQRUtil.getLostPoint(this);
			(0 === r || t > s) && ((t = s), (e = r));
		}
		return e;
	}
	setupTimingPattern() {
		for (let t = 8; t < this._moduleCount - 8; t += 1) null === this._modules[t][6] && (this._modules[t][6] = t % 2 == 0);
		for (let t = 8; t < this._moduleCount - 8; t += 1) null === this._modules[6][t] && (this._modules[6][t] = t % 2 == 0);
	}
	calcR(t, e) {
		for (let r = -2; r <= 2; r += 1) for (let s = -2; s <= 2; s += 1) this._modules[t + r][e + s] = -2 === r || 2 === r || -2 === s || 2 === s || (0 === r && 0 === s);
	}
	setupPositionAdjustPattern() {
		let t = this.objQRUtil.getPatternPosition(this._typeNumber);
		for (let e = 0; e < t.length; e += 1)
			for (let r = 0; r < t.length; r += 1) {
				let s = t[e],
					i = t[r];
				null === this._modules[s][i] && this.calcR(s, i);
			}
	}
	setupTypeNumber(t) {
		let e,
			r,
			s = this.objQRUtil.getBCHTypeNumber(this._typeNumber);
		for (e = 0; e < 18; e += 1) (r = !t && 1 == ((s >> e) & 1)), (this._modules[Math.floor(e / 3)][(e % 3) + this._moduleCount - 8 - 3] = r);
		for (e = 0; e < 18; e += 1) (r = !t && 1 == ((s >> e) & 1)), (this._modules[(e % 3) + this._moduleCount - 8 - 3][Math.floor(e / 3)] = r);
	}
	setupTypeInfo(t, e) {
		let r,
			s,
			i = (this._errorCorrectLevel << 3) | e,
			o = this.objQRUtil.getBCHTypeInfo(i);
		for (r = 0; r < 15; r += 1) (s = !t && 1 == ((o >> r) & 1)), r < 6 ? (this._modules[r][8] = s) : r < 8 ? (this._modules[r + 1][8] = s) : (this._modules[this._moduleCount - 15 + r][8] = s);
		for (r = 0; r < 15; r += 1) (s = !t && 1 == ((o >> r) & 1)), r < 8 ? (this._modules[8][this._moduleCount - r - 1] = s) : r < 9 ? (this._modules[8][15 - r - 1 + 1] = s) : (this._modules[8][15 - r - 1] = s);
		this._modules[this._moduleCount - 8][8] = !t;
	}
	mapData(t, e) {
		let r = -1,
			s = this._moduleCount - 1,
			i = 7,
			o = 0,
			n = this.objQRUtil.getMaskFunction(e);
		for (let e = this._moduleCount - 1; e > 0; e -= 2) {
			6 === e && (e -= 1);
			let a = !0;
			for (; a; ) {
				for (let r = 0; r < 2; r += 1)
					if (null === this._modules[s][e - r]) {
						let a = !1;
						o < t.length && (a = 1 == ((t[o] >>> i) & 1)), n(s, e - r) && (a = !a), (this._modules[s][e - r] = a), -1 === (i -= 1) && ((o += 1), (i = 7));
					}
				if ((s += r) < 0 || this._moduleCount <= s) {
					(s -= r), (r = -r);
					break;
				}
			}
		}
	}
	getErrorCorrectPolynomial(t) {
		let e = this.qrPolynomial([1], 0);
		for (let r = 0; r < t; r += 1) e = e.multiply(this.qrPolynomial([1, this.objQRMath.gexp(r)], 0));
		return e;
	}
	getData(t, e) {
		let r = 0,
			s = new Array(t.length),
			i = new Array(t.length),
			o = 0,
			n = 0;
		for (let a = 0; a < t.length; a += 1) {
			let l = t[a].dataCount,
				h = t[a].totalCount - l;
			(o = Math.max(o, l)), (n = Math.max(n, h)), (s[a] = new Array(l));
			for (let t = 0; t < s[a].length; t += 1) s[a][t] = 255 & e.getBuffer()[t + r];
			r += l;
			let u = this.getErrorCorrectPolynomial(h),
				d = this.qrPolynomial(s[a], u.getLength() - 1).mod(u);
			i[a] = new Array(u.getLength() - 1);
			for (let t = 0; t < i[a].length; t += 1) {
				let e = t + d.getLength() - i[a].length;
				i[a][t] = e >= 0 ? d.getAt(e) : 0;
			}
		}
		return { ecdata: i, dcdata: s, maxDcCount: o, maxEcCount: n };
	}
	createBytes(t, e) {
		let { ecdata: r, dcdata: s, maxDcCount: i, maxEcCount: o } = this.getData(e, t),
			n = 0;
		for (let t = 0; t < e.length; t += 1) n += e[t].totalCount;
		let a = new Array(n),
			l = 0;
		for (let t = 0; t < i; t += 1) for (let r = 0; r < e.length; r += 1) t < s[r].length && ((a[l] = s[r][t]), (l += 1));
		for (let t = 0; t < o; t += 1) for (let s = 0; s < e.length; s += 1) t < r[s].length && ((a[l] = r[s][t]), (l += 1));
		return a;
	}
	qrBitBuffer() {
		let t = new Array(),
			e = 0,
			r = {
				getBuffer: () => t,
				getAt: function (e) {
					let r = Math.floor(e / 8);
					return 1 == ((t[r] >>> (7 - (e % 8))) & 1);
				},
				put: function (t, e) {
					for (let s = 0; s < e; s += 1) r.putBit(1 == ((t >>> (e - s - 1)) & 1));
				},
				getLengthInBits: () => e,
				putBit: function (r) {
					let s = Math.floor(e / 8);
					t.length <= s && t.push(0), r && (t[s] |= 128 >>> e % 8), (e += 1);
				},
			};
		return r;
	}
	createData(t, e, r) {
		let s,
			i = this.objQRSBlock.getRSBlocks(t, e),
			o = this.qrBitBuffer();
		for (s = 0; s < r.length; s += 1) {
			let e = r[s];
			o.put(e.getMode(), 4), o.put(e.getLength(), this.objQRUtil.getLengthInBits(e.getMode(), t)), e.write(o);
		}
		let n = 0;
		for (s = 0; s < i.length; s += 1) n += i[s].dataCount;
		if (o.getLengthInBits() > 8 * n) throw new Error("code length overflow. (" + o.getLengthInBits() + ">" + 8 * n + ")");
		for (o.getLengthInBits() + 4 <= 8 * n && o.put(0, 4); o.getLengthInBits() % 8 != 0; ) o.putBit(!1);
		for (; !(o.getLengthInBits() >= 8 * n || (o.put(this.PAD0, 8), o.getLengthInBits() >= 8 * n)); ) o.put(this.PAD1, 8);
		return this.createBytes(o, i);
	}
	addData(t) {
		let e = this.qr8BitByte(t);
		this._dataList.push(e), (this._dataCache = null);
	}
	isDark(t, e) {
		if (t < 0 || this._moduleCount <= t || e < 0 || this._moduleCount <= e) throw new Error(t + "," + e);
		return this._modules[t][e];
	}
	getModuleCount() {
		return this._moduleCount;
	}
	make() {
		this.makeImpl(!1, this.getBestMaskPattern());
	}
	createTableTag(t, e) {
		t = t || 2;
		let r = "";
		(r += '<table style="'), (r += " border-width: 0px; border-style: none;"), (r += " border-collapse: collapse;"), (r += " padding: 0px; margin: " + (e = void 0 === e ? 4 * t : e) + "px;"), (r += '">'), (r += "<tbody>");
		for (let e = 0; e < this.getModuleCount(); e += 1) {
			r += "<tr>";
			for (let s = 0; s < this.getModuleCount(); s += 1) (r += '<td style="'), (r += " border-width: 0px; border-style: none;"), (r += " border-collapse: collapse;"), (r += " padding: 0px; margin: 0px;"), (r += " width: " + t + "px;"), (r += " height: " + t + "px;"), (r += " background-color: "), (r += this.isDark(e, s) ? "#000000" : "#ffffff"), (r += ";"), (r += '"/>');
			r += "</tr>";
		}
		return (r += "</tbody>"), (r += "</table>");
	}
	byteArrayOutputStream() {
		let t = new Array(),
			e = {
				writeByte: (e) => {
					t.push(255 & e);
				},
				writeShort: (t) => {
					e.writeByte(t), e.writeByte(t >>> 8);
				},
				writeBytes: (t, r, s) => {
					(r = r || 0), (s = s || t.length);
					for (let i = 0; i < s; i += 1) e.writeByte(t[i + r]);
				},
				writeString: (t) => {
					for (let r = 0; r < t.length; r += 1) e.writeByte(t.charCodeAt(r));
				},
				toByteArray: () => t,
				toString: () => {
					let e = "";
					e += "[";
					for (let r = 0; r < t.length; r += 1) r > 0 && (e += ","), (e += t[r]);
					return (e += "]");
				},
			};
		return e;
	}
	base64EncodeOutputStream() {
		let t = 0,
			e = 0,
			r = 0,
			s = "",
			i = {},
			o = (t) => {
				s += String.fromCharCode(
					((t) => {
						if (t < 0);
						else {
							if (t < 26) return 65 + t;
							if (t < 52) return t - 26 + 97;
							if (t < 62) return t - 52 + 48;
							if (62 === t) return 43;
							if (63 === t) return 47;
						}
						throw new Error("n:" + t);
					})(63 & t)
				);
			};
		return (
			(i.writeByte = (s) => {
				for (t = (t << 8) | (255 & s), e += 8, r += 1; e >= 6; ) o(t >>> (e - 6)), (e -= 6);
			}),
			(i.flush = () => {
				if ((e > 0 && (o(t << (6 - e)), (t = 0), (e = 0)), r % 3 != 0)) {
					let t = 3 - (r % 3);
					for (let e = 0; e < t; e += 1) s += "=";
				}
			}),
			(i.toString = () => s),
			i
		);
	}
	gifImage(t, e) {
		let r = t,
			s = e,
			i = new Array(t * e),
			o = {};
		(o.setPixel = (t, e, s) => {
			i[e * r + t] = s;
		}),
			(o.write = (t) => {
				t.writeString("GIF87a"), t.writeShort(r), t.writeShort(s), t.writeByte(128), t.writeByte(0), t.writeByte(0), t.writeByte(0), t.writeByte(0), t.writeByte(0), t.writeByte(255), t.writeByte(255), t.writeByte(255), t.writeString(","), t.writeShort(0), t.writeShort(0), t.writeShort(r), t.writeShort(s), t.writeByte(0);
				let e = n(2);
				t.writeByte(2);
				let i = 0;
				for (; e.length - i > 255; ) t.writeByte(255), t.writeBytes(e, i, 255), (i += 255);
				t.writeByte(e.length - i), t.writeBytes(e, i, e.length - i), t.writeByte(0), t.writeString(";");
			});
		let n = (t) => {
			let e = 1 << t,
				r = 1 + (1 << t),
				s = t + 1,
				o = (() => {
					let t = {},
						e = 0,
						r = {
							add: (s) => {
								if (r.contains(s)) throw new Error("dup key:" + s);
								(t[s] = e), (e += 1);
							},
							size: () => e,
							indexOf: (e) => t[e],
							contains: (e) => void 0 !== t[e],
						};
					return r;
				})();
			for (let t = 0; t < e; t += 1) o.add(String.fromCharCode(t));
			o.add(String.fromCharCode(e)), o.add(String.fromCharCode(r));
			let n = this.byteArrayOutputStream(),
				a = ((t) => {
					let e = t,
						r = 0,
						s = 0,
						i = {
							write: (t, i) => {
								if (t >>> i != 0) throw new Error("length over");
								for (; r + i >= 8; ) e.writeByte(255 & ((t << r) | s)), (i -= 8 - r), (t >>>= 8 - r), (s = 0), (r = 0);
								(s |= t << r), (r += i);
							},
							flush: () => {
								r > 0 && e.writeByte(s);
							},
						};
					return i;
				})(n);
			a.write(e, s);
			let l = 0,
				h = String.fromCharCode(i[l]);
			for (l += 1; l < i.length; ) {
				let t = String.fromCharCode(i[l]);
				(l += 1), o.contains(h + t) ? (h += t) : (a.write(o.indexOf(h), s), o.size() < 4095 && (o.size() === 1 << s && (s += 1), o.add(h + t)), (h = t));
			}
			return a.write(o.indexOf(h), s), a.write(r, s), a.flush(), n.toByteArray();
		};
		return o;
	}
	createImgTagPrima(t, e, r, s) {
		let i = this.gifImage(t, e);
		for (let s = 0; s < e; s += 1) for (let e = 0; e < t; e += 1) i.setPixel(e, s, r(e, s));
		let o = this.byteArrayOutputStream();
		i.write(o);
		let n = this.base64EncodeOutputStream(),
			a = o.toByteArray();
		for (let t = 0; t < a.length; t += 1) n.writeByte(a[t]);
		n.flush();
		let l = "";
		return (l += "<img"), (l += ' src="'), (l += "data:image/gif;base64,"), (l += n), (l += '"'), (l += ' width="'), (l += t), (l += '"'), (l += ' height="'), (l += e), (l += '"'), s && ((l += ' alt="'), (l += s), (l += '"')), (l += "/>");
	}
	createImgTag(t, e) {
		(t = t || 6), (e = void 0 === e ? 4 * t : e);
		let r = this.getModuleCount() * t + 2 * e,
			s = e,
			i = r - e;
		return this.createImgTagPrima(r, r, (e, r) => {
			if (s <= e && e < i && s <= r && r < i) {
				let i = Math.floor((e - s) / t),
					o = Math.floor((r - s) / t);
				return this.isDark(o, i) ? 0 : 1;
			}
			return 1;
		});
	}
	stringToBytes(t) {
		let e = new Array();
		for (let r = 0; r < t.length; r += 1) {
			let s = t.charCodeAt(r);
			e.push(255 & s);
		}
		return e;
	}
	base64DecodeInputStream(t) {
		let e = t,
			r = 0,
			s = 0,
			i = 0,
			o = {
				read: () => {
					for (; i < 8; ) {
						if (r >= e.length) {
							if (0 == i) return -1;
							throw new Error("unexpected end of file./" + i);
						}
						let t = e.charAt(r);
						if (((r += 1), "=" === t)) return (i = 0), -1;
						t.match(/^\s$/) || ((s = (s << 6) | n(t.charCodeAt(0))), (i += 6));
					}
					let t = (s >>> (i - 8)) & 255;
					return (i -= 8), t;
				},
			},
			n = (t) => {
				if (t >= 65 && t <= 90) return t - 65;
				if (t >= 97 && t <= 122) return t - 97 + 26;
				if (t >= 48 && t <= 57) return t - 48 + 52;
				if (43 == t) return 62;
				if (47 == t) return 63;
				throw new Error("c:" + t);
			};
		return o;
	}
	createStringToBytes(t, e) {
		let r = (function () {
				let r = this.base64DecodeInputStream(t),
					s = () => {
						let t = r.read();
						if (-1 === t) throw new Error();
						return t;
					},
					i = 0,
					o = {};
				for (;;) {
					let t = r.read();
					if (-1 === t) break;
					let e = s(),
						n = (s() << 8) | s();
					(o[String.fromCharCode((t << 8) | e)] = n), (i += 1);
				}
				if (i !== e) throw new Error(i + " != " + e);
				return o;
			})(),
			s = "?".charCodeAt(0);
		return function (t) {
			let e = new Array();
			for (let i = 0; i < t.length; i += 1) {
				let o = t.charCodeAt(i);
				if (o < 128) e.push(o);
				else {
					let o = r[t.charAt(i)];
					"number" == typeof o ? ((255 & o) == o ? e.push(o) : (e.push(o >>> 8), e.push(255 & o))) : e.push(s);
				}
			}
			return e;
		};
	}
	qr8BitByte(t) {
		let e = this.QRMode.MODE_8BIT_BYTE,
			r = this.stringToBytes(t),
			s = {
				getMode: () => e,
				getLength: function (t) {
					return r.length;
				},
				write: function (t) {
					for (let e = 0; e < r.length; e += 1) t.put(r[e], 8);
				},
			};
		return s;
	}
}
class QrCode extends LitElement {
	static get is() {
		return "qr-code";
	}
	static get properties() {
		return { qrImg: { type: String }, text: { type: String, converter: (t) => t.replace(/^[\s\u3000]+|[\s\u3000]+$/g, "") }, showtext: { type: Boolean }, typeNumber: { type: Number }, errorCorrectLevel: { type: String } };
	}
	static get styles() {
		return css`
			:host {
				display: block;
			}
			#qr {
				width: fit-content;
			}
			.error {
				width: 246px;
				height: 206px;
				margin: 20px;
				font-size: 2rem;
				border: 10px solid black;
				text-align: center;
				padding-top: 20px;
			}
			.error div {
				font-size: 1rem;
			}
			.qrtext {
				font-weight: bold;
				margin: 5px auto;
				text-align: center;
			}
		`;
	}
	constructor() {
		super(), (this.text = ""), (this.showtext = !1), (this.typeNumber = 4), (this.errorCorrectLevel = "L");
	}
	setShowText(t) {
		this.showtext = t;
	}
	_showText() {
		if (this.showtext) {
			let t = document.createElement("div");
			(t.className = "qrtext"), (t.textContent = this.text), this.shadowRoot.querySelector("#qr").append(t);
		}
	}
	createQrcode() {
		let t = new QRCodeGenerator(this.typeNumber, this.errorCorrectLevel);
		try {
			t.addData(this.text), t.make(), (this.qrImg = t.createImgTag()), (this.shadowRoot.querySelector("#qr").innerHTML = this.qrImg), this._showText();
		} catch (t) {
			console.log("ERROR", t), (this.shadowRoot.querySelector("#qr").innerHTML = `<div class="error">Parámetros incorrectos<div>${t.message}</div></div>`);
		}
	}
	updateQrcode(t, e, r) {
		(this.typeNumber = void 0 === e ? this.typeNumber : e), (this.errorCorrectLevel = void 0 === r ? this.errorCorrectLevel : r), (this.text = t), this.createQrcode();
	}
	firstUpdated() {
		"" !== this.text && this.createQrcode();
	}
	render() {
		return html` <div id="qr"></div> `;
	}
}
window.customElements.define(QrCode.is, QrCode);

document.getElementById("genBtn").onclick = function (e) {
	var text = document.getElementById("msg").value;
	var qr = document.getElementById("qrcode2");
	var typeNumber = document.getElementById("tN").value;
	var showText = document.getElementById("sT").value === "true" ? true : false;
	typeNumber = typeNumber > 10 ? 10 : typeNumber < 1 ? 1 : typeNumber;
	var errorCorrectLevel = document.getElementById("eCL").value;
	qr.setShowText(showText);
	qr.updateQrcode(text, typeNumber, errorCorrectLevel);
};
