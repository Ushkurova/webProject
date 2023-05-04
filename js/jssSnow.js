window.addEventListener('scroll',e=>{
    document.body.style.cssText = `--scrollTop: ${this.scrollY}px`
})

var select = document.querySelector('.change-lang');
const allLang = ['en','ru','fr'];
select.addEventListener('change',changeURLLanguage);

function changeURLLanguage(){
    let lang = select.value;
    location.href =window.location.pathname + '#' + lang;
    location.reload();
    
}

function changeLanguage(){
    let hash = window.location.hash;
    hash = hash.substr(1);
    console.log(langArr);
    if(!allLang.includes(hash)){
        location.href = window.location.pathname + '#en';
        location.reload;
    }
    else{
        select.value = hash;
        for(let key in langArr){
			console.log(key);
            if(key=='main'){
                document.querySelector('.lng-'+key).innerHTML='<img src="img/home.png" class="icon"> ' + langArr[key][hash];
            }
            else{
                if(key=='about'){
                    document.querySelector('.lng-'+key).innerHTML='<img src="img/info.png" class="icon"> ' + langArr[key][hash];
                }
                else{
                    if(key=='port'){
                        document.querySelector('.lng-'+key).innerHTML='<img src="img/contact.png" class="icon"> ' + langArr[key][hash];
                    }
                    else{
						console.log(key);
						if (document.querySelector('.lng-'+key) == null)
							{
								console.log(key);
							}
						else{
                        document.querySelector('.lng-'+key).innerHTML=langArr[key][hash];
						}
                    }
                }
            }
        }
    }
    
}

changeLanguage()
