document.addEventListener('DOMContentLoaded', ()=>{
    const body= document.body;

    const form=document.getElementById('contact-form');
    const successMsg=document.getElementById('form-success');

    if(form){
        form.addEventListener('submit', (e)=>{
            e.preventDefault();

            document.querySelectorAll('.error').forEach( el=> el.textContent= '' );
            let isValid=true;

            // Name 
            const name= document.getElementById('name').value.trim();
            console.log(name);
            if (name === ''){
                document.getElementById('name-error').textContent= 'Name is required';
                isValid=false;
            }

            // Email 
            const email= document.getElementById('email').value.trim();
            const emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(email === ''){
                document.getElementById('email-error').textContent="Email is required";
                isValid=false;
            }
            else if(!emailRegex.test(email)){
                document.getElementById('email-error').textContent="Enter a valid email address";
                isValid=false;
            }

            // Message 
            const message = document.getElementById('message').value.trim();
            if (message === ''){
                document.getElementById('message-error').textContent = "Message is required";
                isValid=false
            }

            if (isValid){
                successMsg.style.display="block";
                form.reset();
                setTimeout(()=> successMsg.style.display = 'none', 5000)
            }
        })
    }
})

