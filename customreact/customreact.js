
function render(reactElement,container){
    const domElement=document.createElement(reactElement.type);
    for(let property in reactElement.props){
        domElement.setAttribute(property,reactElement.props[property]);
    }
    container.appendChild(domElement);
}
const container=document.querySelector('#root');
const reactElement={
    type:'input',
    props:{
        type:'text',
        placeholder:'Enter your name',
        required:true
    }
}
render(reactElement,container);
