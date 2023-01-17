export function utils(clips) {
    console.log(clips + "yeah");
    document.querySelectorAll('li').forEach(li => {
        li.remove();    
    });
    function addListItem() {
        let li = document.createElement('li');
        
        li.innerHTML = "New element";  
        li.addEventListener('click', testTheEventListener);
        document.getElementById('GUI').appendChild(li)
    }
    
    function testTheEventListener() {
        console.log("The event listener works!");
    }
    
    document.querySelectorAll('li').forEach(li => {
        li.addEventListener('click', () => {
        testTheEventListener();
        });
    });

    for (let i = 0; i< clips.length; i++){
        addListItem();
    }
}
export default utils