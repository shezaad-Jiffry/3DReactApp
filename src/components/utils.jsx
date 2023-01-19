import { useGLTF, useAnimations } from '@react-three/drei'

export function utils(clips,animNames,mixer) {
  
    document.querySelectorAll('#animations').forEach(li => {
        li.remove();    
    });
    function addListItem(animName,clip) {
        let li = document.createElement('li');
        
        li.innerHTML = animName;  
        li.id = 'animations'
        console.log(clip)
        li.addEventListener('click', function() {testTheEventListener(clip)}, true);
        document.getElementById('GUI').appendChild(li)
    }
    
    function testTheEventListener(clip) {
        
        if(clip!=null){
            mixer.stopAllAction()
            clip.play()
        }
        
    }
    
    document.querySelectorAll('li').forEach(li => {
        li.addEventListener('click', () => {
        testTheEventListener();
        });
    });

    for (let i = 0; i< clips.length; i++){
        let name = animNames[i]
        let clip = clips[i]
        
        addListItem(name,clip);
    }
}
export default utils