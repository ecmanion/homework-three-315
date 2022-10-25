var MODEL = (function (){
    var homeContent = `<div class="home">
    <div class="home-background">
        <img src="images/home.jpg" alt="">
    </div>
    <div class="home-title">
        <h1>Become a professional baker at home</h1>
        <div class="home-paragraph">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In distinctio iure saepe unde eligendi nulla nihil quod. Totam alias eveniet possimus asperiores necessitatibus officia est dolorum ipsa, inventore velit! Nisi?</p>
        </div>
    </div>
</div>`;
    var browseContent = `<div class="browse-page">
    <div class="browse-area">
        <div class="individual-outside">
        <div class="browse-individual">
            <div class="browse-image-one">
                <div class="button view">View</div>
            </div>
            <div class="browse-caption">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, eveniet aliquam corrupti incidunt modi, est ut dolore cum excepturi deserunt impedit deleniti dolor enim voluptates in, blanditiis vel error doloremque.</p>
            </div>
        </div>
        <div class="button-holder">
            <div class="button bottom">Edit Recipe</div>
            <div class="button bottom">Delete</div>
        </div>
        
    </div>
    <div class="individual-outside">
        <div class="browse-individual">
            <div class="browse-image-two">
                <div class="button view">View</div>
            </div>
            <div class="browse-caption">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, eveniet aliquam corrupti incidunt modi, est ut dolore cum excepturi deserunt impedit deleniti dolor enim voluptates in, blanditiis vel error doloremque.</p>
            </div>
        </div>
        <div class="button-holder">
            <div class="button bottom">Edit Recipe</div>
            <div class="button bottom">Delete</div>
        </div>
    </div>
    <div class="individual-outside">
        <div class="browse-individual">
            <div class="browse-image-three">
                <div class="button view">View</div>
            </div>
            <div class="browse-caption">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, eveniet aliquam corrupti incidunt modi, est ut dolore cum excepturi deserunt impedit deleniti dolor enim voluptates in, blanditiis vel error doloremque.</p>
            </div>
        </div>
        <div class="button-holder">
            <div class="button bottom">Edit Recipe</div>
            <div class="button bottom">Delete</div>
        </div>
    </div>
    <div class="individual-outside">
        <div class="browse-individual">
            <div class="browse-image-four">
                <div class="button view">View</div>
            </div>
            <div class="browse-caption">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, eveniet aliquam corrupti incidunt modi, est ut dolore cum excepturi deserunt impedit deleniti dolor enim voluptates in, blanditiis vel error doloremque.</p>
            </div>
        </div>
        <div class="button-holder">
            <div class="button bottom">Edit Recipe</div>
            <div class="button bottom">Delete</div>
        </div>
    </div>
    <div class="individual-outside">
        <div class="browse-individual">
            <div class="browse-image-five">
                <div class="button view">View</div>
            </div>
            <div class="browse-caption">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, eveniet aliquam corrupti incidunt modi, est ut dolore cum excepturi deserunt impedit deleniti dolor enim voluptates in, blanditiis vel error doloremque.</p>
            </div>
        </div>
        <div class="button-holder">
            <div class="button bottom">Edit Recipe</div>
            <div class="button bottom">Delete</div>
        </div>
    </div>
    <div class="individual-outside">
        <div class="browse-individual">
            <div class="browse-image-six">
                <div class="button view">View</div>
            </div>
            <div class="browse-caption">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, eveniet aliquam corrupti incidunt modi, est ut dolore cum excepturi deserunt impedit deleniti dolor enim voluptates in, blanditiis vel error doloremque.</p>
            </div>
        </div>
        <div class="button-holder">
            <div class="button bottom">Edit Recipe</div>
            <div class="button bottom">Delete</div>
        </div>
    </div>
    <div class="individual-outside">
        <div class="browse-individual">
            <div class="browse-image-seven">
                <div class="button view">View</div>
            </div>
            <div class="browse-caption">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, eveniet aliquam corrupti incidunt modi, est ut dolore cum excepturi deserunt impedit deleniti dolor enim voluptates in, blanditiis vel error doloremque.</p>
            </div>
        </div>
        <div class="button-holder">
            <div class="button bottom">Edit Recipe</div>
            <div class="button bottom">Delete</div>
        </div>
    </div>
    <div class="individual-outside">
        <div class="browse-individual">
            <div class="browse-image-eight">
                <div class="button view">View</div>
            </div>
            <div class="browse-caption">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, eveniet aliquam corrupti incidunt modi, est ut dolore cum excepturi deserunt impedit deleniti dolor enim voluptates in, blanditiis vel error doloremque.</p>
            </div>
        </div>
        <div class="button-holder">
            <div class="button bottom">Edit Recipe</div>
            <div class="button bottom">Delete</div>
        </div>
    </div>
    <div class="individual-outside">
        <div class="browse-individual">
            <div class="browse-image-nine">
                <div class="button view">View</div>
            </div>
            <div class="browse-caption">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, eveniet aliquam corrupti incidunt modi, est ut dolore cum excepturi deserunt impedit deleniti dolor enim voluptates in, blanditiis vel error doloremque.</p>
            </div>
        </div>
        <div class="button-holder">
            <div class="button bottom">Edit Recipe</div>
            <div class="button bottom">Delete</div>
        </div>
    </div>
    <div class="individual-outside">
        <div class="browse-individual">
            <div class="browse-image-ten">
                <div class="button view">View</div>
            </div>
            <div class="browse-caption">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, eveniet aliquam corrupti incidunt modi, est ut dolore cum excepturi deserunt impedit deleniti dolor enim voluptates in, blanditiis vel error doloremque.</p>
            </div>
        </div>
        <div class="button-holder">
            <div class="button bottom">Edit Recipe</div>
            <div class="button bottom">Delete</div>
        </div>
    </div>
    </div>
</div>`;
    var aboutContent = `<div class="about-entire">
    <div class="about-smaller">
        <div class="about-title">
            <h1>About Us</h1>
        </div>
        <div class="about-image">
            <img src="images/about.jpg" alt="about">
        </div>
        <div class="about-information">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In repellat reiciendis, aliquid exercitationem earum laborum autem! Deserunt, quos tenetur? Est laborum quod vitae iste quam excepturi adipisci qui, sunt blanditiis!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam reprehenderit odio culpa, consectetur dolorem iure, cumque itaque quibusdam soluta velit cupiditate officiis aspernatur iusto, tempore eum vitae sapiente nemo labore.</p>
        </div>
    </div>
</div>`;
    var contactContent = `<div class="contact-entire">
    <div class="contact-smaller">
    <div class="contact-heading">
        <h1>Contact Us</h1>
    </div>
    <div class="contact-image">
        <img src="" alt="">
    </div>
    <div class="form">
        <input type="text" class="basic" placeholder="Your name...">
        <input type="text" class="basic" placeholder="Email...">
        <input type="text" class="basic" placeholder="Phone number...">
        <input type="text" class="basic" placeholder="Reason for contact...">
    </div>
    </div>
</div>`;

    function initOtherListeners() {

        $("a").click(function(e) {
            let btnId = e.currentTarget.id;
            console.log("Current page is " + btnId);
            MODEL.changePageContent(btnId);
        })

        $("div .button").click(function(e) {
            let btnId = e.currentTarget.innerText;
            console.log("Current button is " + btnId);
        })

    }
    


    var _changePageContent = function(pageName) {
        let contentName = pageName + "Content";
        console.log('Pagename is ' + pageName)
        $("#app").html(eval(contentName));

initOtherListeners();
    }

    


return{
    changePageContent: _changePageContent,
}
})();



