let readMoreBtn = document.querySelectorAll(".cards_row button");
let popup = document.querySelector(".popup");
let closePopup = document.querySelector(".close-popup");
let loginForm = document.querySelector(".login-form");

if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let name = "Leila";
        let pass = "20052000";
        if (e.target.name.value === name && e.target.password.value === pass) {
            window.location.replace("info.html");
        } else {
            console.log("not submitted");
        }
    });
}

fetch("https://fakestoreapi.com/products")
    .then((data) => data.json())
    .then((info) => {
        let data = "";
        info.map((element) => {
            data += `
      <div class="col-lg-6 col-md-6 col-sm-12 col-12 card-col">
      <div class="card">
        <ul>
          <li>
            <p>${element.id}</p>
            <span>111112</span>
          </li>
          <li>
            <p>${element.title}</p>
            <span>Lorem, ipsum.</span>
          </li>
          <li>
            <p>asdfg</p>
            <span>Lorem, ipsum.</span>
          </li>
          <li>
            <p>asdfg</p>
            <span>Lorem, ipsum.</span>
          </li>
        </ul>
        <button data=${element.id} class="msg_btn">Send message</button>
      </div>
    </div>`;
        });
        document.querySelector(".cards_row").innerHTML = data;
        if (document.querySelectorAll(".msg_btn")) {
            document.querySelectorAll(".msg_btn").forEach((btn) => {
                btn.addEventListener("click", (e) => {
                    console.log(e.target.getAttribute("data"));
                    let a = "";
                    
                    a += `
                    <div class="popup">
    <div>
      <form class="send-message" action="">
        <div>
          <label for="send_msg">Write your message</label>
          <input type="hidden" value="">
          <textarea name="send_msg" id="send_msg" cols="35" rows="3" placeholder="write your message"></textarea>
        </div>
        <button class="msg_to_user">Send message</button>
      </form>
    </div>
  </div>
                    `;
                    document.body.innerHTML += a;
                    document.querySelector(".send-message").addEventListener("submit", (e) => {
                        fetch('https://fakestoreapi.com/products', {
                                method: "POST",
                                body: JSON.stringify({
                                    title: 'testtttt',
                                    price: 13465,
                                    description: 'dhfgh',
                                    image: 'asfs',
                                    category: 'dkgjdkgdkf'
                                })
                            })
                            .then(res => res.json())
                            .then(json => console.log(json))
                    });
                });
            });
        }
    });