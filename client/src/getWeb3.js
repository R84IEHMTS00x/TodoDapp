import Web3 from "web3";

const getWeb3 = () =>
    new Promise((resolve) => {
        window.addEventListener('load', () =>{
            let web3 = window.web3;

            const alreadyInjected = typeof web3 !== "underfined";

            if(alreadyInjected) {
                web3 = new Web3(web3.currentProvider);
                resolve(web3);
            } else {
                console.log("metamask not found.");
            }
        });
    });

export default getWeb3;