window.addEventListener("load", () => {
    document.querySelector("#password-form").onsubmit = () => {
        let success = true;

        if (document.querySelector("#password").value !== "web2") {
            success = false;
            document.querySelector("#error-message").style.display = "block"; 
        }
        else
        {
            //le mot de passe est bon, on va garder le choix de ville pour la prochaine page
            let citySelect;
            if(document.querySelector("#quebec").checked)
                citySelect = "quebec"
            else if(document.querySelector("#paris").checked)
                citySelect = "paris"
            else if(document.querySelector("#tokyo").checked)
                citySelect = "tokyo"

            localStorage.setItem("city", citySelect)
        }
    

        return success;
    }
})