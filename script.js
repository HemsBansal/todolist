var input = document.querySelector('.input');
        var addBtn = document.querySelector('.addbtn');

        var itemList = document.querySelector('.itemlist');


        function addItemToList(){
            if(input.value.trim() == ''){
                //show warning
                input.value = '';
                let warning1 = document.querySelector('.w1');
                warning1.style.display ="block";

                setTimeout(() => {
                    warning1.style.display ="none";
                }, 2000);
            }
            else{
                //add to list
                var item = document.createElement('li');
                item.setAttribute('class','item');

                item.innerHTML = `<i class="val" style='font-style: normal;'>${input.value}</i><span onclick="cross(this)" class="cross">&Cross;</span>
            <span onclick="edit(this)" class="edit">&larrhk;</span>
            <span onclick="checks(this)" class="check">&check;</span>`;
            
            itemList.appendChild(item);
            input.value = '';
            }
        }


        addBtn.onclick = addItemToList;

        input.addEventListener('keydown',(e)=>{
            if(e.keyCode === 13){
                addItemToList();
            }
        });

        //clear button function
        var clearBtn = document.querySelector('.clearbtn');
        
        clearBtn.addEventListener('click',()=>{
            itemList.innerHTML = '';
            let warning2 = document.querySelector('.w2');
            warning2.style.display ="block";

            setTimeout(() => {
                warning2.style.display ="none";
            }, 2000);
        });


        //check button function
        function checks(e) {
            var it = e.parentElement;
            it.classList.toggle('checked');
        }

        //cross button function
        function cross(e) {
            var it = e.parentElement;
            it.innerHTML = '';
        }

        //edit button function
        function edit(e) {
            var val = e.parentElement.querySelector('.val');
            input.value = val.innerHTML;
            cross(e);
        }

        //share button function
        function share() {
            var items = document.querySelectorAll('.val');
            var copyList = document.createElement('textarea');

            copyList.value = '';
            document.body.appendChild(copyList);
            copyList.setAttribute('class','copylist');

            items.forEach(e => {
                copyList.value += `${e.innerHTML}, `;
            });

            copyList.select();
            copyList.setSelectionRange(0,99999);
            document.execCommand('copy');
            alert('List Copied To Clipboard');

        }