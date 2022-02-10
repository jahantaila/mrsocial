

// register screen 

// when the usrt clicks to register, the username and password data is collected from the 
// input fields and a database record is created for the account
onEvent("registerbutton", "click", function( ) {
	username = getText('createusernameinput');
	password = getText('confirmpasswordinput');
	createRecord('Account: ' + username, {Username: username, Password: password}, function(record) {
	  console.log(username);
	  console.log(password);
	setScreen('loginScreen');
	});
	
});

// when the user clicks to login, they can login if they already have an account
onEvent("loginhere", "click", function( ) {
	console.log("loginhere clicked!");
	setScreen("loginScreen");
});




//login screen 

var username;
var password;

// the user can register by clicking this button if they dont have an account
onEvent("registerhere", "click", function( ) {
	console.log("registerbutton clicked!");
	setScreen('registerScreen');
});


// when the loginbutton is clicked, a readrecords function is called in order to see if the credentails
// the user entered matched with credentials alreadfy in the dataset, if they do, the user is 
// redirected to the home page and if they dont, an error pops up for user
onEvent("loginbutton", "click", function( ) {
	console.log("loginbutton clicked!");
	username = getText('usernameinput');
	readRecords("Account: " + username, {}, function(records) {
	  for (var i =0; i < records.length; i++) {
	    if (records[i].Password == getText('passwordinput')){
	      setScreen('homeScreen');
	      setText('welcomebutton', "Welcome, " + username); // on homescreen
	    }
	    else{
	      showElement("wronglabel");
	      playSpeech("INCORRECT USERNAME SLASH PASSWORD - PLEASE TRY AGAIN", "female", "English");
	         
	    }
	  }
	});
});


// home screen


setText('welcomebutton', "Welcome, " + username);
setStyle("welcomebutton", "pointer-events: none");

var todaysfeaturedpostlist = ["data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGCBMVExcVFRUYGBcZGRocGhkaGRsfIRofHxoZHxkfHxoaHysjGh8oHSAfJDYkKC4uMjIyHCE3PDcwOysxMi4BCwsLDw4PHRERHTEoIygxMzk0MTE2MTExMTEuNDExMTQzMTExMTExMTMxMTExMTExMTExMTExMTExMTExMTExMf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAgMEBQYHAQj/xABHEAACAQIEAwYDBQUFBwIHAAABAhEAAwQSITEFQVEGEyJhcYEykaEHQrHB8BQjUnLRM2KS0uEVQ1OCk7LxJHMWFzSDorPC/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAECAwQFBv/EAC8RAAICAQMCBAQGAwEAAAAAAAABAhEDBBIhMUETUWFxFCIykQWBscHR8EKh4TP/2gAMAwEAAhEDEQA/ANgrtcpnibrB4B00oF0MWucBxN+5de1bzL3txZzouoYzozA8xRL/AGVxqhma0AqgknvLZgASdA8nSpvhiWnw3Ew1pDcR8wuFQTDuRlBI0AKTp/FU/wAXOHuYu/gGw1pR3Oa3cRAGVgkySBpuY9I1mqUj1D12aD2JKl147JLnr6lh7Cf/AEGH/wDbH4mpo1XOxbn9hw+v+7H51MF26mrV0R5zP/6y93+o4aimkMx6milj1qRWODXabSeprhJ6mgY7BowpmGbqa6GbqaQDuj0zDHqa7mbqaYh3QFNMx6mu526mkA6oU0Lt1NFzt1NAD4V2mOZv4jRs7dTTEPBXI1ppnbqfnXQ7fxGkA9rhppnbqaKpYcz13pAOzXOdMWuN1NENxv4j86YEiDQplh7rZhJp7QMNNCizQoA6DUbiz+8Pt+AqSFRmN/tD7fgKCMjPuAIO5xq9zdc3rrpnRrQUZCSsh3VpzMZ0OkVK8Zv5Rib9nCXVv3bZU3HuWiFH3iALpIgAQAN1FOMb2Pwdx2uMjBmJJyuQJO5jlrSI7DYL+B/8ZqvazrfFaeT3tv1Ve3HX0RK9jG/9FY/9sfnUvNNsPaVFVEAVVACgcgNAKVDVNLg5WSe6cpLu2/uKChWW9sMZiOJY0YPBsyix3guPnZEZgVDFsgmFYZRuSWOgEmobhXae/wD7Px2EvOzMtsZGZpYA3Ldq4hYmWAziNTpmG0CmJM2q5cVRmZgF01JAHlqdP/NHivP1nj5PC7mCYyBdttbn+CWa4voHCsP5z0ovFuN3iMPbN+7bt2sPaWUYz47a3GMZ1zfEqanZBRYz0JFI4/GW7Nt7t1gltBLMZ0HoNTroANzUB9m/BreHwqsj3W77LdPegKwLKojKPh0jmfWoL7dOIZMNasgx3twsw6rbE/8AeyH2pjLvwfi+GxKZ7F1LoG+U6r0zKfEp9QKWONs5bj94mW1mF05gRbKjMwf+EhdSDtWMYEHh3EcFkkF7Fg31kwTdnvB6CFYDkQKYcF4hd/YOJXCxBvNh1bozXLlxrg90zz5GlYG8WsTbY5VdGaJgMCY6wDMUtFeblw6BsOME118SwDNAChLhgqlvQN4dczkx7TVi412lxeOx4t2MTctozi3ayPcRTsC57qWOYjNJGgjYA0WBt0UIrEOM9uMcCLVi+wSwgRrgAdrxTKj3XZwxhn1A/vCZJpz24t484a1jrmKuBL62gbCtcQWy1rMYUNlIJUnXXxDenYGzSJAJEnlz+VHArz5wLsziLmIsBcRbsXr6d5bOe53hRlJBm2pykqDCsykgGprG9sMZh5wuEvNdXDZjdvumdrhFzxk5yxW0GYINZjWdRCEzaCtDLVAxn2kAcPtYpLSm6902ntljlVlGZzI1grljpnEzGsN9o3bi437G2DuOoKd8yqxBY5yq27mU+IBkdWTY/KgDWaKaUaikUAIvSZpRhRDQALHxCpAGo+x8Q9akBTGdmhQoUACo3HfGfb8BUnFRuMHjPt+ApEJ9BChQiik0FYaaMKSGtKKKAMcxHEcTwnGYsd2CcQWNp2JiC7Mjrp4yMxBXTX6xqcBvWsBfxV5WTvDbt2w8hmBuo7uQdRqiwTv4j0J3gUhjsBZvJ3d22txJByuARI2MHegmmYJxbs9etYXDYlVZ0vpyE5bmdgi6DZlykdTmHSn3HGucN4mWyKWtf2feA5GBtZFYbZgs8jukVvVtAAAAAAAABpA5aDlXXsq0BlVgNswBj57UUTKt9leKxV7CNdxTOzXLrNbZxE2yluCoEAJmzRoBzGmtVT7clTvrDs+bKkd1kaDLyxa7OUZgAMok6e9awoo4oAxvsr2YxfELt3G4gm2XS53RZYzO1spbZUO1pAQR1yiJ1NQnargl/A4e1hbptlrt65e/dsxEKlu3bHiVdZa5pHMVv801xXD7Ny5buPbRrlsnu3IGZMwgweUjlQBi3Yt/2TE4zA4grae9aewLp07u5DC2c3JHDTOk+CjdjMNxTBYkW0wRzXTbVme2zBUDHMUuowVRBJJk/Cvvp/a3sbhMcQ10MlxRHeWyqsR0OZWDDpI0kxE1McIwFvD2Ldm3OS2oRcxkwOp60DMJw63OF3sRaxGEF5HQ2l7xSEeLiMjgwQ6nKpygzMagipfttxfFX+FWWxVrumOK8MKUzoLVwqcjGVEkjzygitoFNOKcLs4hMl+2lxAQwDqDBGxHQwSPQnrRQjE+BJcPFsGv3ks4cL5ZcCjgaf3p+dRXZ3iduzhMaryb1+3atW5B0UsxvEty0C6bkx5x6AtcFw63VvLZti4qBFcKAVUAAKI5ACB0Gm1Q+O7A8Nu3DdfD+MtmYK7qrHckorBdTvA1oI2YjesXP2fDWud27duovMi4bVm2Y82tPHl6057O8Hf/AGnawriHTEBXHKLbFrkTuCqEg8wRW1t2OwpxlvFwwa0iJbtgqLahJCEIFkZZ0ExMGKWwfZWxbx93HAsbtxAuUxlUwoZl0mSFA+fWgdkxXCaUKURloEJPSTCl2WkmWmSC2PiHrUgKj7Pxj1qRFAIEUKFCgYaKjMa3jPt+AqTqH4pcAdp8pPsKRCb4E2NJO461BcW7V4azlzXFhhIYEFT4sujDczJgclbpWW9pu3mIvOyp4LYbTKx1AOhzAA+fypN+QowvqbMvErQbL3iyOU1IW3BrzS3GsQ7LNxoBBCycs7TBNXPsR2txSXF7wjujpDTIMxoYmOWVifaoOTjyyxYlLiPU2laUVaj8DxK27qgMsVnQeR57RUuqCnGakrRFwcXTCBaMBRstGC1IZwCiYnDrcUqwkGKXCV2KAGpwiRc0/tJz+ciD6afnRRgliNf93z/gMr7zTsihTAaXsAjMzkHM1s2yZ+6TJEevOi3OHW2Os/2neb/e1+mp0p9FcigViNmyqTlESxY+pMmlYrsUIpiAK7QFCKBAihXaEUhgiikV2gRQSEXFIutOHFJMKCIlaXxD1p8BTS0PEPWni0EgRQrutCgAVVu2GTLc7xgqDKWJIAyjKSCTpBGnvVpFVntTgEv57b6qwX6ZSDB8wDQRn0POnHybd57aXC1tGJtwxgAkssdCMx956004dhHuuEQanrsPMnkKn/tFwVu3inW3aa2FJBEQp2grAgSCDppqOc0v9l2FW5iWBjRNARIPiXcc4IFQnLbFyLsUd0kmaH2O7P4JLQVTauXAB3jBlZiec6kgeVDinC8F3mWbec7oSY8iR8M+vSpqxh3t3BcvXUgQAIC76CZJri2Q7E2LyEMxkAg6j4gY1B1Ghiua5Nuzprhcf8KthExlrEhAw7hQCTnALBmJXJz0BIzdGO8VqXDb4ZQMwLBRMTzG/oay77VcDcF3DFNcwKPO24KyeUcvM1bPs6sNbU2y+YADqdeZJaSSRA12CirsctrXqZc0d0W/IuQFEv3VRWdjCqCzHoAJJ9AKUAqlfbTxVrHDXCxmvMLPs4Yvp/KCPetpiG1/7UcKy3O5VmdSAobKAwkDOMpJy6jeD1ip3g/ay1dMFWQFmRWYaMVJBjoCQY6xXmcXHRtipEGIjbUT+NWnsR2txNq7bttcm0XllboSGcDzaCB5tUJqS5iyyNdGei8Hi0u58pJyNlbQjWAY1AnQinEVB9nsebjFRbYKJMsI1GUADqI59ANeQnBUoT3xshKNOgRRYo5rhqZBhFmTppy1366cqMBXa4yyIpgAV01wGj0BQK4a5THi+L7tM0xufSKjOSirZKKt0PWYUUEGqVisbdeCzFRrA+H8T+RPpRsDxW5b0QB1nnO/roPw9ayLVxvlcF/gOuC4tSbCmvDeIrcEEgOB4knUe3SnbCtcZKStGeUWnTCWxqPWnYpsu4pyKYkGoUKFBITmonHj963t+AqVFRuN/tD7fgKCGRcFP7b9jLeNAcsy3FBAjLB9ZH19KzngGAfh/E0tXoVmEAh5ADA5QTlEtmCjl+FbmpppxHh+HuXEuPZtu6MAjsoJTmIPLX5Gq51tafcnik4tPyIRC5cKVkOSTcYZgCIyqFzDWJ1JA0PWKTxCXEZFS2GUmSwCoU030uNI5QQKfXr627roU8II0G2qg6Ty1+lEs8Tw5bVSsR7/AJRXLtJbX1O0pSa3LoQ/2gcWNj9jVgpL3TqykwgW2S2hGzN9D61dOzPDktWxlUzA1YQfPlOp11qtFLWK4vZ07xbVi8xkeEZmtoBHMQW3316Ve0YbVuxY4upHOyzlzFh4qs9vMHadbFy5JFq4XChWeSUK/CoJMEg7cqs4qO7QWUa3LxlB8U7Qd6tzcQZVi+pFWuYLA4tM7Lafu/CS6rKeRDCV9DUVgeD8PL58Kth7qGVCFDBGuymaslrheHNp1UALcjQ6T6A7acqS4VwbDrdS5bdpBEDvCQAN4BJjTePPrXMT7Wzovo/4LB2fslLShpzwCxJkljqZqTqu4dmuY9yrnJaXIyyYzFVO2x0cH2FWAGunh+mvI52RU/dWGIrhrtFNWlZDdqOPJhEDMJLGFEgSYJ3J6a9OpGk14dqbzgOr2kGvgadfDpJ0MTGi79Yqo/ati2bHZM5dVygRoLZjbpmzEH5e1Yxq3WOZEUqDlDicx5NLKQZO87jzismRycuHRfjja6WbXwHtKl5lUlQzQFXUMTEmV6eenT1sc15+7PLiVuA21dApksHeWOw8TKDp8o5TqNn7KcUN6wjPOeIaY+JdGgfXWpY8nO2TsJ42luomqr/bC+UVZgqdwdNip3qfJqG7U4DvLYYTKTp1BifwFWZ03B0Rxpb1ZXcTdXvZLqGiFJG2xMDlOnyplxHF2bbC27sWP8oC9NCR9KlMRw/D5ld1LOTIBkxGpIXYew1MUpib6GGW2xiM2ZSNOoJ3I6RXL2JdTqRXFJDThF5bXiYE803kgamDPSdJjlV2UyAarxwq4hEQCBm8XIhRB094+dWMCt2li0n5HO1VX6hFGopwKSUa0qBWsyBqFCKFBIRqv8ZxypfFufG8QP8Al3P4VPzVI4vhy2PuMdh3ceQyJ+c/Oq8snGNolttpE3hHmM27D6jWnJUa+YFMReEA/wB4e3+hH4127icoB5kj61RuXcs2kP2oti2Ll7N8JTNJmVYhQPLKxkeRI9IgEHWrHkF1XRxKsIYeUn+tRuDwQFwWolgYny3DfKseSN8rub9NlqLi+xIdmLPci4+Qm7dyanbL4u7UeQ1J82PSrBaXTTrqfxpjgYcjL8I0XXkP9ak0rViTrkxZJbpNineEeetV/tTjmm2P92cxZf4gQB81mY9KnNyfICPcmfyqr9sLbFSVJACiIPQSPz1qxzS4l0fBmzblByj1XK/IWxNpWRQQHjVWOsdN1M9AekVG3H7m4LhcmDJOg/5QBHLTzqP4f2huiyqoQzT94D4Y0jq08jyFQmOxT37h70k2wNh4c7H7u0hQJkiDsAemeWmnvSr8zTj/ABXB4DyN9uV3+xYOweJuvi7+KYHK7vpyAY/u1HsFPsTV8XimgJTyOvzjTWqPw7i2VQoSSJyWrYgCebdD9acYziTrba5iGFpdlVdSx5KOn135V0tqguTi4NS58Qtttsu+CxyOWCkEjXTp6cqXe6oMEifWsFx3a+4rtlcov/DWAW/mcrmHpPWi2uKq/wC8yuXXXMCZ9tQT66n11rPLK10XB1McJV83UW7Z2HvcUFvMwR7rAjQaweXPRSA0cvSrH2a4Xds3VU2wUEkeAgBmJlszXCW56ZRE1T8TxK+Ltu68GHDGRIXxaANl1YAamd55VfMJ2ysugIdFWNGdsoZuS9Z3Mb1myqTSNunaV+Yvxuzi2uQhKpt4O710550Y/KKT7I37yYs2/FqwLg5spBGh0GURp01PU04tdoFd8q3LTOdWRGJIXQBtfMj51FW+0oTGPIWFuIisJ52hmWDpOY5ZEHl61RTUvb7l2T6exqQqI4zx+zZRj8bKCco5++1V/GcZvOD4oXXbSR51DX0GQsxPjm3bHUmJOv3V8I9WHQ13YYr5kecza2nth92P8NiGxCvqbVxWiRqBojwNsyahCRB0O1cbhLvcDXLvhUyLaLbUMQZWWC5yJ/vagQdJmY4Hw8XLAg5XV2nTz50THm9aZcyqQdius7aREzrXFypwlKlxZ6DTZd+OKk+aHFniNvDJDau2YqvWMsjbT9ClMD2mt3IJUqGAKtM6aGTGwE024zglGHZ3XxyCsHVDMDX3M+3Saq+DuN4RMZyqqSNvF4fRZOp/GhTyRajH7ClHFKLlL7mn22mKVWql2R4iq/urjk3WdtCSdyZ9DMnptVuiuit1fMqOapQl9Ds7loUJ8qFMkN5qt49F/abhDAnwBhOo8Kxp8jViNZv2pQft90xr+7g8x+7TnVGpkowt+ZowY98qvsTPEEKhBMSY+jEfr06UhevnLJOuhPqDBqt8S4rdW5bQO5ChnYGTIAywTvuZ16U5s49bjhU5DbmJ3n3rBJ3yi6WPa6ZZuFk5n9/yp1iLAa7K6MyBWb+6CSB7k6+gprw9SAI+IgyeU7flUnYO3M5datgrjTKXw+BfBWQihRyFLZz9KTLx8qb4q/GnoKtlJQRFK2OFuE3Cuuqrr/i+v9R50TG2MywQDO48oafxNR9jiireYFSSUBBERoSPbekOIcZv65AifNj7EwPpWd5oV8zJ+DOfRFEs22tuyaoUZlg+RipBFQwTbDHQDxCNzyWKjLRbvGlmLZjqSZOp1neasmBt3I+Jh7Kf+4GuxF3FM8ZsfjSh6nMPbeIBCDogA+tU/wC0HHfvBaDkd2ok/elmEeLfmPTWrxdcgasT7KP+0VmP2hYdu8F5SSrLkbQ+AqZXXoahkTkjq6Fwhkq+a4I/A4ZbrAgElioAjRR59Y6f1q92eA3XCoqm3akbj95dbyWJCjfMfX0g/stwV53Z7cgoQC5PhA3ICgeJupkR4d61rF4C3dtK1ydBrBIzew+IeVc7LJ76XY9NiglBN9zOO3HZw21tRohIVwEGYmPCAYMdNdAJNVzgdvJc7q5aDozd4itBnYGPYfU1tS4LDNaFsIpTloN+unOqZ2m4Mt9la2XU2/CwIIJMlgAT8YXNp1nQnSiGSltb4ISjte5dfIVZbOHsu6WAjZSFVEAZ9yFgamTVT4lL4zDOEyK1sPc/vOJnMD98eGemg5VYeC2Xt3kuF2dkzLlcOurCNiB90ltN4gEQab9oge/QgALlYjrmLeMn5CB0156W6VXlSu7Mmv1LWGUkqr9yX4eTcItggZtZOwA+InyAkmi8Uvnvka3oqDwA9FYEE+ZbxHzNRS4827bhR4rkKT/ChIzAfzGJ8ljnTu28qCTJynr/AFrubaZ5V5bjx16/bsaVw4qSXUeG4FuAj++CT9ZPvTtrakiRqNRI2Oon13qr9iccTbFs72yY/lMkfI5vpVmzE7aCuRljtm4+p6bT5PExRku6G/F79u3bZrkFADmG+YHQKBzJJAjzrNeI8Qa4zXHADH7o2UDRVHl589TzqY7a8R728LKGVtnXX72oLH0kqOpnpVVxr6troD+VbcGNRjufVnJ12dzlsj0X+2T3A7huYzD3F1l1F0fwXMpkkdH+IHrmHKtUisM+z7iM4+yA+r3CCATqusSBy0B18q3MVDK7aNWjhti+O4KFd/XOuVA3DQms67YLGLut/J/+tK0Qms/7atF+6fJf+xayaz6F7mzRyqTfoV39oM5jsNvfrz/QonB8U6MwbKQSTnEyRyBHIjbc8qQ79dc2moUzAHTr/r5U8wuDYN67fqd/Lesq4i1ROTUnbZZcHii0ESfKdjzqx2XlR/KKr/CMIFgsTPvGnlJqwwI0PKpYk0UTasGJY5T/AMo+tRmNeBvvP9BS2PxW4nmD8h0qLxQYg7jQ/Tf8apzS3OkOPAtwhy9x4OhtkEeYZSp9v/6pDGsTpXez2HIvP4iCACvzgj1iKkcZYAuHbr86zTg6vy/cu02Xl3/aKHjbZS8Z561I4fGQNWI8gJJ+dL9pcMIzjcH6Go3C3sv3R7yfzrvaLJvxK+3B478Vx+Dq5V0fP3Hly8zaKGn5mOp0AWnvZfgdvEBjdVblsOoykBgSCGbXmIXLp/F5VGvcuXCtsGSxAFtQFWSdJjetB4JgFs2lt6EjVj1bmY6ch5AVZnyKEa7sl+G4Xly7+aXf9iHxeBGGV1srCtJAAAg9IXSOlNk4rYUuRne5baCuW4xDQCIBhFBBkEsKW+0LjQw9nwgNcdgltTzc7T/dAkn0jnUf2e4vbZu7coMQLaltIFwa6jmQDOkyJrkrG+cjXB7HHni6xt8/qh9wO9edne7aW148oCkkEZVYMZ2MMQfNaYcfxbgMUhgfEykEnLyKwR4hvHPboRI8Tx6lBaV1LuY8P3VJm4R5hZI84qJxgLlhOpAjyP3frWzSY4zbbXBg/E8sse1LqI8PxfeEqWHeFAFJ1S6uYFSJEBoBEGInnuY7imAxRUd5ZYEXb0ZRICRaCH93IAMN8jRcDhyls22E5CSp2IBM7jXQ6+9T2A4uVWGzSF30I2MaHnpWuOCGOalFHLnmeSDhN9fuUXGYllCqwPxQDEzziRz0qXweJA0Y8oqW4zwm1iyrvCXl1W6NiY0Dj7yxz3Ee1Vm/bbDGL4APLxTm6FeoP61rbCdt2czLgW1OHP8AJaOA8XSzdUuYVxB8pIyk+4+tW3tHxju7OS3pduDTUeAc33+XmfI1kN69cvMNMq9D8RHp90eZ18qnryOhCEnwIi6nnlBOnqY9AKonhU8ql/eDTi1MsOBwb5/SxW2gUEAyxMsfwqT7D8HOIvG7cH7q22x2ZtIHoNz7U1weHa6yqu5+labwPhyWLK2lGgGvUnmT5mlkn2LtLg3NSfRfqIrwPDd6Los2xcDZs4UBiepI1PvUtSYNHmqDqJJHaFFoUDGprN+3bkX7pAnW112ypJ012/UVpBrPu2eHz4lwGCschXnqqLyO9Z9V9C9zVpvqdeRB3LFp2QuogeLQeAjUDMRpsZE++sVKYdADmZgoO2bQfX8id6YYThoL5iZBPwkAjnO+hBMaRuDU3/s+25UuisVIZcwBytvKzsfSscFS6hNbn7EphbcRGo/qB+P506GEDAaFTqJBj020NROG4QiXO8Q3FY7xcfKdAP7MsU2HSpEM+xclYOkQf8QP4VatvdEGmcxS92JLgk7AoGJPPQFeVNBilYwwIH8WRxy0MDNPTepKyigkhU1jXLr/AOaM9xogZY9D786rkkJplctcUS2+bK8AGTlI5DmY5/gKc8KxpuozEknMRJABiARtQ4zZu3FZdFzKygjkSN4MgnY+wqH7Bm+1t2e2y2yR3ZcQzQCCxXSAT+tKTcXhlHvaKMcMi1EZ/wCNO0P+P2T3BfkXCjUbjX8BVX2q09onzWyiqciXAdTrJQxoPRuZH5Vi4GGy+5JroaOG3EqOD+Myc9U78kXPsdw7JbF4r+8acsg+FdtBIkkayTsRA62Jw+TYN0Gmv1/Om/CnDJb1kZE1HPQcuXX38qeXLqtmBjIujdCY1HQgDT1MeRzteI3KT4O5p8aw44xgv++pnfai33zLm0ZJ1nMQSffkAYqFwfAmxGLtt3q2riKSMyki4J1AIOhgnrVk7W8Ju33z2r9y0RsEYhTpHiVSM3rv51WuE8M4hZvKbxe6odGV+9JgAkMsXD4VYGT/ACj1px1GN49kXXuaPhckMiyPn2ND4f2TVSHe4zEbZJT/APKZM+UU17S2UtkdWJAE/EcpJ15AafMdRVrXGKxyqZAGpXUDyEbmq/2vNm7byzqrAow5GNf5pBiKrhOGKSe6kTzRyaiLVW+xTFxMkOQADpGmk9feQT6V0348JCnP4UPMkA+EjrGs+R8pVbhd/J3ndsbTDV1E6cmy7wDrI6VCY5pQ6BjzWYzR/C33WG4P/kdZSjkjugzz6UsM9uaNf3zJNeKKuVZ0lY9CadY+8j2iHAIEQSNVPUHkdxVCOJcOC85SdGIgzuAw2B3Omm/pUz+25k0M6zH686ljfPIs8ajcSS4XgwYyamfEp3aCJg/e05ecCac4y+bl13PN2P105dNKgcLxLK2hidRyOh0I8oNS+J4klwSfC+xYfe/mHXzGvrV27ujC8bXEuHd+5Yuw7q2JKgD4c2vMAwRPqQfatJFZX2Nu2reIR8tx3YZRBEeKNRJEj59a04tWTJ9R2tE3sp9RQmjA02RtaXmqzadmhQmhQAgwrLPtDxHc4troElSgbooNtRy2md/OtSjr7Vk/b/Ff+tvqFhgU1jV/3NsgCdzMekVTmXyr3LtNL5n7ElwN86BmGWfuzMeVTVs1GcLSEAOmgn89tKed4RtB+Y+utYuEWN2x+o86OF1/X6NRwx8aFG9oP5z9K6OLIDBDD1EfSjfENrZKT1610mmScRQ6DN/gb8YpyjgidR6g1PdF9CO1jbGHSuLiG7y2LbKVAhh6kbHqAPrRcYdCTykmmHDrkCZg89CSfJQOZNZpcSL8asmUS29xiVBnwbSCAM2o2PP0k9aSxfAsOw/swD5Er+BFJYG4O8UL/h56mWYxtp+NS141ZCT2toqzYYuXzIr32foEvYrDM7M9m4GtsxJm3dXMmhOpU5hPlypxxTvLavbZh4Xzs07gyfWZO1V3jdw2uKWjmIW9Za22sAm2+cE+gNO+3mLKi4FbMFClzroqoobQ7wRqN59KeRuUUl36/n1JYYKMvb9hoO0llWym6qkawxjbzOlSFriSOAcymdjIIMb686qHYLgFvFd7fxA0dWS2pjQMCGfnqNl9z0qA45cNogpvbugSAAZUOCJ10gee/OoLRwk3GMna6l8tY4Nbo8M1dbv6H+lGLjmdPnTzs5Ys4nDW7uUMHUGY/RB8q5jOzlrdbjJ5GSPkRNZXpp9WaI6jG2R+J43ctIFRmygGAQoA9C1Z9xXEsS10I7IWMnSM0yYO0GZnXc1oNzsxmPius38q5Y9229q5xLgCdybQXwZY1JAA8m3J/ve9a9Nknifd/wAGTV48OaNUvMy/EWnvooyALn5MIXmSdZLEeRjnyqwYPs1afLct4hTh2jMv3lPNQ0xvKzuPOqpxjDXsLcZQwhvhYtExzCsRrPPUfkz4L3gOVHKgzMMQOgg7SDrIB2HWulPdJXF0c/HHHDicbSNM7aFThiSSoXxjLGkDLbGoIy6zy05iqDbxQgBmgdRsR01An2mnPEMbfyLacmAZzGJYgc22aJ5ikDhy0GZYRMiD7xy9KelhOEabvkp12XFkknVcF47F9osGLZa4ZuWl0GU5nAOhUyJiYM6AZTtMW3Gdppto6FoJzK8eF1IIWSIgkxI3EHSs07PW3/egyENp9VYxOUgSGmddN940mIk8Bwe8cGcjqSr6E7qHbxCFMbkxMfG2oEVHU35ktHs4VF67J8VZ3HeXNXy5be/lOY6k+Q8jprVyrF+zOccTwwBOTMCWJPj0cEDSJ2kcuvKtnmjBe3k05klLgNQolCrSgJFZH2wXNxm4sTlyHlp+5t++/wCVa/lrM+0uGjiV+5/F3f0tJ/pVWZ1Esw/UxzhjApTvopp3kCm13Ex1+cVgZpSH9/GZRO55DKdTy96YW7RZhcZjmnYTCydoiTSODOc5yAF+718zr9Kl8FZYyxBgRHz1MeX51mySd0jXDGkrZKYSABTmCdBzqIwJYMVnaNOlTGCeHBNasbUkjLkTiwcWwgTDuxJmB9SB+dQfDrqg761YO2LEYcx/Ev41SUuXHfKseFSxIHIAknU0tTDbNKPkTwx3LkuODRF1UAE7nmemtObh0qB4PjGyjMJU7MOXqKlxdkaa9KIyTiKaafJVe1YQYvA3LnwLfKMfJ0OmvWPxqq9qL927hhcClXuXrhfym45Ej1ird2ybTBr3YM8Qw0kGdfGcsbTln0nXelOOcNcOxtogtxOVjp/pQ3sjF+o8fMpL0K3wXEP3ChEIYZROmUaDYHoIAE61Adru7uPcVRbtZELuedxxmkc/GWaI0+LoKneKJdZgLVwKsAEBYUa+Lf4pEDWOe81x+CWGQK1tQN/ASgkxrCkCdB8hUsWWELk1y/IMuGc2lF8Isf2QW3TBqsgSSYJzbzsM2ntV0Z3HMH/7bn86oHBcZ+yIqW3Hdr91o1nqx5/OphO1qjQoP+Vo/PWhZIybdieKUexYLz3G5EDzyoB7CWP0qOxxVAcxzt/hUHlv8XrrUde7UWpANsrPMmfzn5TUL2g7V2ba6kljMBFI9u8cAD8fWppKXTkUoSiraop3agNfxdxmgi3CidpiT4Ty1G/MAbaBngECOSVzRsCYzEkBVkbDWfIA0rwrFPiWcpb8RaSAdFEDLqdtvcyedWPh3DEt+N4a515D0HvvV08igqf2Kcennlnx08x/jMBaa2rd2u3iC6E9Yca+dV3F4C2rLkuGGn4jtAk6c9OnkNzUjxXGoqljAA5/+NapWI4mBcLjxAyAraxqDm10BlRoPfzngyyl2I6rRQiuXz/steHlVK6annzA29Ovyqf7JXULvaeMt1Mp2+Ue/wBKrXCeKLdXUANFP8HigjqxWYIMT+BA/KibcrswQ+RolezuFQcRtFgM63SNBEMAVmNpOuwXUz5VrdZlg7I/2jZu5ioutbYKBuQArgkjloTt8VaeRTw8I3ZZKTTXkFkfo0K7FCrrKTsVm3au4Bjrw5ju5/6SVpRFZD9oV104hdK25/s5YHU/urfKqcyuJbhXzCeKxE6BqbO8kLI13Pl6/wBKjWxizPUT/WnOAu5jPIjQnoN9/wBaVjlGkbscd0qJO15CfzHPSpexiMh3gk/Q/wCnKoqywAmdIkaj1B9Of9ObrJ3jgtDLAmGg+XSSdPlWGatm1odcPvjMwE/EdTrz61I2sXOo2HOoHiFxrd17f3SRlM75gCQQOkx7U6a+FTyHStCbSRicbZLcc4jnsG23xAqQeTD+omj9mMAEs3LrnR1Psgmfn+AFVW7jM/gBJjlz1IjTrNXLFo1rAsjwWFoqT66AewMe1Wp290vITjtVLuyF4Lfga7U4xuIZhoci8gPib+lQvDb4HPSi8S4hmMIxA5kGPaRr61SrqibjbH/FrgRsGsAiy9y84zbuVK2wOkZixPl5zTHiXE3utLn2GgHtUddv01OJJOVQSelSe6SSfRE4QUOe47uXfeiW7mYwoJ8uXz6UbD4EnVz/AMo/M/0+dPlAUQoAH6+dQbiuhZbELGHySSZnl09zv66elIYjKOZ+ZI+RNL4i7FQeNxVPHFyYPgegZzlERznaPzFO8Lw+wynwBlP8RJU+inSPSoXh917ilWOW0PQZtdR5jzqSt8SWIkAfd8/arJRkuEWwipKx34LYy21VQOSgAfIVBce44lvwiGc/dn4f5o29N6Q47xfu1OX4jovQeZ/Ic6r3CbZnOTJPPc+cyKuxYL+aRl1Op8NbMfX9CycDw1w3BeuNmOUgD7oneBtGnrVb7VWUW++SAQRmA6kSYFW7guIXRDpqD7/61SsdczAkR4mZojWSzTuNoA+vWtMOpyU3JuTBwbEZWiatmFxWaDVCU1M8M4hsDvUpRshOHc1vAYhWxGEE/BiAo33ZLh13/h8vXkdMrI/s1db18g6lLlq4p6EZgY6HKSPetbmjGqVE07SBNCuaUKmSFjWcduOy2MuYp72Hto63AszdCwVUKQVIg6KDIPPyrRqNSlFSVMIycXaMUvdhuJOQTh1UgzIu2yP+4U4wnYjHiS1lTrMm4k8p5wNfKIFbFQIqDxRaotjnlF3wZfhuyWNU6WlAg/fTc++n+lObPZ3H6xbRddy4JjTYAgD8prR67VT0sGW/GZPQzG/2UxpulxbHKDnSBoAYGafnS47N43/hgjn+8T+taNQin8NAr8eRnvC+zOJW+jtaUBTM50P5zUx2i4firuHe2qKWLDUOBKgzz2Ogq012Kfw8fNi8aXkjJj2S4jsLQA/9y3/moDsdxAf7of47f+ataFcFPwIE1qZryMhudiuIsQO7Cjme8t6e2apLCdj8SghbQ8znST6ma0wCuZR70paeDVcgtTP0M5/+GcX/AMMf40/zUm/ZjGf8If40/wA1aVRTUfhMfqS+Ln5IyvFdk8cdrQ/6lv8AzVEYvsNxM7WV/wCra/zVtMVyKsjgjHoJ6mb8jBb/ANn3GCMotiBsO+tD8Gpex2C4qEhrKMYIE3bcDzaG8X1rcaFWbEV+NO7TMCf7NOKEEmz4jv8Av7URO3xTSyfZzxUQBaCgchdtfjnrdq6Ke0rfPUxTDdhOKLr3C6RH72111Pxfqajb/wBmXFiSRh05x+9tbE/zdPxNegFo4pUkRXB51ufZZxaZ7lT63bX+ei//ACt4uP8AcL/1bf8Amr0ZRSKYGU/Zh2T4lhcTnvoiWsviPeIxMarAQnWesCCa1SuTXJoSElQJHUfOhXKFMY5t/r6UDQoUgO864OX65VyhSEGfYVzrQoUxgH9fxrp5e1coUAAfnQ/X41yhTAUpPlQoUgO/r8KFChTAHP8AXlRTvQoUxnKIaFCgDnKi0KFAHaFChQAotdFChUQA21FG5oUKBBf9a4350KFMAlChQoGf/9k="];

var featuredpostindex = randomNumber(0, todaysfeaturedpostlist.length - 1);

setProperty("featuredpostimage", "image", todaysfeaturedpostlist[featuredpostindex]);


onEvent("uploadpostbutton", "click", function( ) {
	console.log("uploadpostbutton clicked!");
	setScreen("newpostscreen");
});

var yourusername;
username = getText("welcomebutton");
onEvent("profilebutton", "click", function( ) {
	setScreen("profileScreen");
});

var yourusername = username;


onEvent("otherpostsbutton", "click", function( ) {
	setScreen("otherPosts");
});


onEvent("signoutbutton", "click", function( ) {
	setScreen('loginScreen');
});



// new posts screen

var postname;
var posttype;
var postdescription;


onEvent("postnameinput", "change", function( ) {
	postname = getText("postnameinput");
});


onEvent("posttypedropdown", "change", function( ) {
  posttype = getText("posttypedropdown");
	console.log("Selected option: " + posttype );
});

var executed = false;

onEvent("postdescriptioninput", "change", function( ) {
  executed = true;
  console.log('has function been exectued yet?: ' + executed);
  postdescription = getText("postdescriptioninput");
    
});



onEvent("postnextbutton", "click", function( ) {
	console.log("postnextbutton clicked!");
	if (executed == true){
	   console.log('Post Name: ' + postname);
	   console.log('Post Type: ' + posttype);
	   console.log('Post Description: ' + postdescription);
	   console.log('Post By: ' + username);
	   }
	   
	 setScreen('newpostscreen2');
	   
});


// newpostscreen2

var postimage;
var posthastag;

onEvent("newpostimageselect", "change", function( ) {
	console.log("newpostimageselect photo selected!");
	postimage = getImageURL("newpostimageselect");
	hideElement("newpostimageselect");
	showElement("postpictureviewer");
	setImageURL("postpictureviewer", postimage );
	showElement("almostdoneimage");
	showElement("posthastaginput");
	showElement('finishpostbutton');
});


onEvent("posthastaginput", "change", function( ) {
  posthastag = getText("posthastaginput");
	console.log("posthastaginput entered text: " + posthastag);
	if (posthastag.length > 10){
	  showElement('posthashtagerror');
	  posthastag.slice(0, 10);
	  console.log(posthastag);
	}
});


                                                          
                             
onEvent("finishpostbutton", "click", function( ) {
	console.log("finishpostbutton clicked!");
	
	if (posthastag.includes('#')){
	  posthastag.toLowerCase();
	  
	}
	else{
	  var startingsymbol = '#';
	  posthastag = startingsymbol.concat(posthastag);
	  posthastag.toLowerCase();
	  console.log(posthastag);
	  
	}
	
  if ((postimage != "") || (posthastag != "") || ((postimage != "") && (posthastag != ""))){
    createRecord("Posts", {"Post Name": postname, "Post Type": posttype, "Post Description": postdescription, "Post By" : username, "Post Image": postimage, "Post Hashtag": posthastag}, function(record) {
	   console.log('Uploading Record');
	   });
  }	
  else{
    showElement("posthashtagerror");
    setText("posthashtagerror", "Please make sure to fill out all fields!");
  }
	setScreen("congratsScreen");
	
});

// congrats screen



instagramFilter();



// this function utilizes the list filter pattern to filter through the most followed instagram 
// account in the Most Followed Instagram Accounts dataset. Additionally, the list filter 
// pattern is also used to filter the professions assosiated with each instagram account,
// and display the most followed instagram account and the profession on the congratsScreen. 

function instagramFilter(){
  var accountranks =  getColumn("Most Followed Instagram Accounts", "Rank");
  var accountowners = getColumn("Most Followed Instagram Accounts", "Owner");
  var topInstaAccounts = [];
  for (var i = 0; i < accountowners.length; i++){
    if (accountranks[i] < 3){
      appendItem(topInstaAccounts, accountowners[i]);
      setText('topinstauserbox', topInstaAccounts );
      setStyle("topinstauserbox", "pointer-events: none");
      console.log(topInstaAccounts);
    if (topInstaAccounts[i] == 'Instagram'){
      removeItem(topInstaAccounts, i);
    }  
      
    }
  }
  var instaprofession = getColumn("Most Followed Instagram Accounts", "Profession/Activity");
  var accountranks =  getColumn("Most Followed Instagram Accounts", "Rank");
  var topprofessions = [];
  for (var i = 0; i < instaprofession.length; i++){
    if (accountranks[i] < 3 ){
      appendItem(topprofessions, instaprofession[i]  );
      setText('instaprofesionbox', "About: " + "Famous " +  topprofessions);
      console.log(topprofessions);
    }
    if (topprofessions[i] == "Social media platform"){
      removeItem(topprofessions, i );
      
    }
  }
  
}


// when the instalearnmorebutton is clicked, a custom url is opened in a new tab for the 
// user to learn more about the instagram account
onEvent("instalearnmorebutton", "click", function( ) {
	console.log("instalearnmorebutton clicked!");
  open("https://in.search.yahoo.com/search?fr=mcafee&type=E211IN714G0&p=" + getText("topinstauserbox")  );
});



// when the homebutton located on the congrats screen is clicked, the user is redirected
// to the home screen
onEvent("congratshomebutton", "click", function( ) {
	console.log("congratshomebutton clicked!");
	setScreen("homeScreen");
});




//profile screen 
var usernamesubstring;
username = getText("welcomebutton");
usernamesubstring = username.substring(0, 9);
username = username.replace(usernamesubstring, "");
console.log("your username is: " + username);
yourusername = username;
setText('profilewelcome', 'Welcome To Profile!');




onEvent("profilebackbutton", "click", function( ) {
	setScreen('homeScreen');
});



// other posts screen 

var postTitle = getColumn('Posts', "Post Name" );
var postUsername = getColumn('Posts', 'Post By');
var postDescription = getColumn('Posts', 'Post Description');
var postHashtag = getColumn('Posts', 'Post Hashtag');
var postImage = getColumn('Posts', 'Post Image');

onEvent("otherpostnextbutton", "click", function( ) {
	viewPost();
});

var nextpostindex;


// this function is responsible for displaying the post data when the user 
//clicks on the next post button. A random list scrolling pattern is utilized here
// in order to display a random post on the screen. 
function viewPost(){
  postTitle = getColumn('Posts', "Post Name" );
  postUsername = getColumn('Posts', 'Post By');
  postDescription = getColumn('Posts', 'Post Description');
  postHashtag = getColumn('Posts', 'Post Hashtag');
  postImage = getColumn('Posts', 'Post Image');
  nextpostindex = randomNumber(0, postTitle.length - 1 );
  setText('posttitlelabel', postTitle[nextpostindex]);
  setText('postusernamelabel', postUsername[nextpostindex]);
  console.log(postImage[nextpostindex]);
  setImageURL("postimage", postImage[nextpostindex]);
  
 
  setText('postdescriptionlabel', postDescription[nextpostindex]);
  setText('posthastag', postHashtag[nextpostindex] );
}



onEvent("otherposthomebutton", "click", function( ) {
	setScreen('homeScreen');
});





