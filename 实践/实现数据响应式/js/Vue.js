class Vue extends EventTarget{
	constructor(arg) {
		super();
	    this.arg = arg;
		this._data = this.arg.data;
		this.el = document.querySelector(this.arg.el);
		this.observe(this._data);
		this.compileNode(this.el);
	}
	observe(data){
		let _this = this;
		this._data = new Proxy(data,{
			set(target,prop,newValue){
				console.log('set...:',target,prop,newValue);
				// 通过自定义事件，传统更新后的值，prop就是属性名，然后更新视图中监听该事件
				let event = new CustomEvent(prop,{
					detail:newValue
				})
				//派发event
				_this.dispatchEvent(event)
				return Reflect.set(...arguments);
			},
			get(target,prop){
				console.log('get...:',target,prop)
				return Reflect.get(...arguments);
			}
		})
	}
	compileNode(el){
		let childs = el.childNodes;
		[...childs].forEach(node => {
			if(node.nodeType === 3){
				console.log('这是一个文本节点')
				let text = node.textContent;
				// {{ title  }} ^排除两边空格   {{ title }} {{name}} 排除内容里{}
 				let reg = /\{\{\s*([^\s\{\}]+)\s*\}\}/g;
				if(reg.test(text)){
					let $1 = RegExp.$1
					console.log('$1:',$1);
					// 更新视图
					this._data[$1] && (node.textContent = text.replace(reg,this._data[$1])); 
					// 监听proxy =>set 中定义的自定义事件
					this.addEventListener($1,e => {
						node.textContent = text.replace(reg,e.detail)
					})
				}
			}else if(node.nodeType === 1){
				console.log('这是一个元素节点')
				let attr = node.attributes; // 元素节点先拿到元素的attribute
				console.log(attr)
				if(attr.hasOwnProperty('v-model')){
					let keyName = attr['v-model'].nodeValue; 
					node.value = this._data[keyName];
					// console.log(keyName)
					
					// 监听input事件，去修改data里的数据
					node.addEventListener('input',e =>{
						this._data[keyName] = node.value;
					})
				}
				
				this.compileNode(node); // 递归下
			}
		})
	}
}