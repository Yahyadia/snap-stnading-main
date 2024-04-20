function btayehLogo(){
    let images = document.querySelectorAll("img")
    for(team of images){
        // console.log(team)
        if(team.src == "https://media.api-sports.io/football/teams/9136.png"){
            team.src = "./images/البطايح.png"  
        }
    }
}

function changeTeamsNamesToArabic(){
    const teams = document.querySelectorAll(".team")
    for(team of teams){
                // console.log(team.innerHTML)
                if(team.innerHTML == "Shabab Al Ahli Dubai"){
                    team.innerHTML = "شباب الأهلي"
                }
                else if(team.innerHTML == "Al-Jazira"){
                    team.innerHTML = " الجزيرة"
                }            
                else if(team.innerHTML == "Baniyas SC"){
                    team.innerHTML = "بني ياس"
                }
                else if(team.innerHTML == "Sharjah FC"){
                    team.innerHTML = "الشارقة"
                }
                else if(team.innerHTML == "Hatta SC"){
                    team.innerHTML = "حتا"
                }
                else if(team.innerHTML == "Emirates Club"){
                    team.innerHTML = "الإمارات"
                }
                else if(team.innerHTML == "Al Bataeh"){
                    team.innerHTML = "البطايح"
                }
                else if(team.innerHTML == "Ajman"){
                    team.innerHTML = "عجمان"
                }
                else if(team.innerHTML == "Al Nasr"){
                    team.innerHTML = "النصر"
                }
                else if(team.innerHTML == "Al Ain"){
                    team.innerHTML = "العين"
                }
                else if(team.innerHTML == "Al-Ittihad Kalba"){
                    team.innerHTML = "اتحاد كلباء"
                }
                else if(team.innerHTML == "Khorfakkan"){
                    team.innerHTML = "خورفكان"
                }
                else if(team.innerHTML == "Al-Wasl FC"){
                    team.innerHTML = "الوصل"
                }
                else if(team.innerHTML == "Al Wahda FC"){
                    team.innerHTML = "الوحدة"
                }
            }
}

function changeVenuesNamesToArabic(){
    let venues = document.querySelectorAll(".venue")
        
        for(venue of venues){
            if(venue.innerHTML == "Al Nahyan Stadium"){
                venue.innerHTML = "استاد آل نهيان"
            }else if(venue.innerHTML == "Hazza Bin Zayed Stadium"){
                venue.innerHTML = "استاد هزاع بن زايد"
            }else if(venue.innerHTML == "Hamdan Bin Rashid Stadium"){
                venue.innerHTML = "استاد حمدان بن راشد ال مكتوم"
            }else if(venue.innerHTML == "Zabeel Stadium"){
                venue.innerHTML = "استاد زعبيل"
            }else if(venue.innerHTML == "Ajman Stadium"){
                venue.innerHTML = "استاد راشد بن سعيد"
            }else if(venue.innerHTML == "Emirates Club Stadium"){
                venue.innerHTML = "استاد نادي الامارات "
            }else if(venue.innerHTML == "Rashid Stadium"){
                venue.innerHTML = "استاد راشد"
            }else if(venue.innerHTML == "Mohammed Bin Zayed Stadium"){
                venue.innerHTML = "استاد محمد بن زايد"
            }else if(venue.innerHTML == "Baniyas Stadium"){
                venue.innerHTML = "استاد بني ياس"
            }else if(venue.innerHTML == "Sharjah Stadium"){
                venue.innerHTML = "استاد الشارقة"
            }else if(venue.innerHTML == "Khalid Bin Mohammed Stadium"){
                venue.innerHTML = "استاد خالد بن محمد"
            }else if(venue.innerHTML == "Ittihad Kalba Club Stadium"){
                venue.innerHTML = "استاد إتحاد كلباء"
            }else if(venue.innerHTML == "Al Maktoum Stadium"){
                venue.innerHTML = "استاد  ال مكتوم"
            }                                
        }
}

