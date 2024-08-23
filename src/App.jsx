import Header from "./components/Header";
import Equip from "./components/Equip.jsx";
import Character from "./components/Character.jsx";
import Cube from "./components/Cube.jsx";
import Magic from "./components/magic.jsx";
import Inventory from "./components/Inventory.jsx";
import Notice from "./components/Notice.jsx";
import Herostory from "./components/Herostory.jsx";
import Armor from "./components/Armor.jsx";
import LeftArm from "./components/LeftArm.jsx";
import RightArm from "./components/RightArm.jsx";
import Artifact from "./components/Artifact.jsx";
import LeftLeg from "./components/LeftLeg.jsx";
import RightLeg from "./components/RightLeg.jsx";
import Cloak from "./components/Cloak.jsx";
import Statses from "./components/Statses.jsx";
import HPblock from "./components/HPblock.jsx";
import { useState } from "react";
import { useEffect } from "react";



function App () {
    const [renderComponent, SetRenderComponent] = useState('Equip')
    const [selectedItemImage, setSelectedItemImage] = useState()
    const [armorItemImage, setArmorItemImage] = useState(() => {
        const storedImage = localStorage.getItem('armorItemImage');
        return storedImage ? storedImage : '';
    });

    useEffect(() => {
        localStorage.setItem('armorItemImage', armorItemImage);
    }, [armorItemImage]);


    const [leftArmItemImage, setLeftArmItemImage] = useState(() =>  {
        const storedImage = localStorage.getItem('leftArmItemImage');
        return storedImage ? storedImage : '';
    });
    
    useEffect(() => {
        localStorage.setItem('leftArmItemImage', leftArmItemImage);
    }, [leftArmItemImage]);

    const [RightArmItemImage, setRightArmItemImage] = useState(() =>{
        const storedImage = localStorage.getItem('rightArmItemImage');
        return storedImage ? storedImage : '';
    });
    
    useEffect(() => {
        localStorage.setItem('rightArmItemImage', RightArmItemImage);
    }, [RightArmItemImage]);
    
    const [ArtifactItemImage, setArtifactItemImage] = useState(() => {
        const storedImage = localStorage.getItem('ArtifactItemImage');
        return storedImage ? storedImage : '';
    });

    useEffect(() => {
        localStorage.setItem('ArtifactItemImage', ArtifactItemImage);
    }, [ArtifactItemImage]);

    const [LeftLegItemImage, setLeftLegItemImage] = useState(() => {
        const storedImage = localStorage.getItem('LeftLegItemImage');
        return storedImage ? storedImage : '';
    });
    
    useEffect(() => {
        localStorage.setItem('LeftLegItemImage',LeftLegItemImage);
    }, [LeftLegItemImage]);

    const [RightLegItemImage, setRightLegItemImage] = useState(() => {
        const storedImage = localStorage.getItem('RightLegItemImage');
        return storedImage ? storedImage : '';
    });

    useEffect(() => {
        localStorage.setItem('RightLegItemImage', RightLegItemImage);
    }, [RightLegItemImage]);

    const [CloakItemImage, setCloakItemImage] = useState(() => {
        const storedImage = localStorage.getItem('CloakItemImage');
        return storedImage ? storedImage : '';
    });

    useEffect(() => {
        localStorage.setItem('CloakItemImage', CloakItemImage);
    }, [CloakItemImage]);
    
    
    
    const [itemStats, setItemStats] = useState(() => {
        const storedStats = localStorage.getItem('itemStats');
        return storedStats ? JSON.parse(storedStats) : {
        name: "",
        strength: 0,
        agility: 0,
        intelligence: 0,
        defense: 0,
        athletics: 0,
        rhetoric: 0,
        description: '',
        };
    });


    useEffect(() => {
        localStorage.setItem('itemStats', JSON.stringify(itemStats));
    }, [itemStats]);


    const [armorItemStats, setArmorItemStats] = useState(() => {
        const storedStats = localStorage.getItem('armorItemStats');
        return storedStats ? JSON.parse(storedStats) : {
            strength: 0,
            agility: 0,
            intelligence: 0,
            defense: 0,
            athletics: 0,
            rhetoric: 0,
        };
        });

        useEffect(() => {
        localStorage.setItem('armorItemStats', JSON.stringify(armorItemStats));
        }, [armorItemStats]);


        const [leftArmItemStats, setLeftArmItemStats] = useState(() => {
            const storedStats = localStorage.getItem('leftArmItemStats');
            return storedStats ? JSON.parse(storedStats) : {
                strength: 0,
                agility: 0,
                intelligence: 0,
                defense: 0,
                athletics: 0,
                rhetoric: 0,
            };
            });

            
            useEffect(() => {
            localStorage.setItem('leftArmItemStats', JSON.stringify(leftArmItemStats));
            }, [leftArmItemStats]);

            const [rightArmItemStats, setRightArmItemStats] = useState(() => {
                const storedStats = localStorage.getItem('rightArmItemStats');
                return storedStats ? JSON.parse(storedStats) : {
                    strength: 0,
                    agility: 0,
                    intelligence: 0,
                    defense: 0,
                    athletics: 0,
                    rhetoric: 0,
                };
                });


                useEffect(() => {
                localStorage.setItem('rightArmItemStats', JSON.stringify(rightArmItemStats));
                }, [rightArmItemStats]);


                const [artifactItemStats, setArtifactItemStats] = useState(() => {
                const storedStats = localStorage.getItem('artifactItemStats');
                return storedStats ? JSON.parse(storedStats) : {
                    strength: 0,
                    agility: 0,
                    intelligence: 0,
                    defense: 0,
                    athletics: 0,
                    rhetoric: 0,
                };
                });


                useEffect(() => {
                localStorage.setItem('artifactItemStats', JSON.stringify(artifactItemStats));
                }, [artifactItemStats]);


                const [leftLegItemStats, setLeftLegItemStats] = useState(() => {
                const storedStats = localStorage.getItem('leftLegItemStats');
                return storedStats ? JSON.parse(storedStats) : {
                    strength: 0,
                    agility: 0,
                    intelligence: 0,
                    defense: 0,
                    athletics: 0,
                    rhetoric: 0,
                };
                });


                useEffect(() => {
                localStorage.setItem('leftLegItemStats', JSON.stringify(leftLegItemStats));
                }, [leftLegItemStats]);

                
                const [rightLegItemStats, setRightLegItemStats] = useState(() => {
                const storedStats = localStorage.getItem('rightLegItemStats');
                return storedStats ? JSON.parse(storedStats) : {
                    strength: 0,
                    agility: 0,
                    intelligence: 0,
                    defense: 0,
                    athletics: 0,
                    rhetoric: 0,
                };
                });


                useEffect(() => {
                localStorage.setItem('rightLegItemStats', JSON.stringify(rightLegItemStats));
                }, [rightLegItemStats]);


                const [cloakItemStats, setCloakItemStats] = useState(() => {
                const storedStats = localStorage.getItem('cloakItemStats');
                return storedStats ? JSON.parse(storedStats) : {
                    strength: 0,
                    agility: 0,
                    intelligence: 0,
                    defense: 0,
                    athletics: 0,
                    rhetoric: 0,
                };
                });

                useEffect(() => {
                localStorage.setItem('cloakItemStats', JSON.stringify(cloakItemStats));
                }, [cloakItemStats]);




                // в плавленном состоянии я насколько насрал в код что даже стыдно
                // статы вставка после выбора 
    const handleItemStatsChange = (stats) => {
        setItemStats(stats);
        if (renderComponent === 'Equip') {
            setArmorItemStats(stats);
        } else if (renderComponent === 'Leftarm') {
            setLeftArmItemStats(stats);
        } else if (renderComponent === 'Rightarm') {
            setRightArmItemStats(stats);
        } else if (renderComponent === 'Artifact') {
            setArtifactItemStats(stats);
        } else if (renderComponent === 'LeftLeg') {
            setLeftLegItemStats(stats);
        } else if (renderComponent === 'RightLeg') {
            setRightLegItemStats(stats);
        }
        else if (renderComponent === 'Cloak') {
            setCloakItemStats(stats);
        }
    };
        

    // имг вставка после выбора 
    const handleItemImageChange = (imageUrl) => {
        setSelectedItemImage(imageUrl);
        if (renderComponent === 'Equip') {
            setArmorItemImage(imageUrl);
        } else if (renderComponent === 'Leftarm') {
            setLeftArmItemImage(imageUrl);
        } else if (renderComponent === 'Rightarm') {
            setRightArmItemImage(imageUrl);
        } else if (renderComponent === 'Artifact') {
            setArtifactItemImage(imageUrl);
        } else if (renderComponent === 'LeftLeg') {
            setLeftLegItemImage(imageUrl);
        } else if (renderComponent === 'RightLeg') {
            setRightLegItemImage(imageUrl);
        } else if (renderComponent === 'Cloak') {
            setCloakItemImage(imageUrl);
        }
    };

// --------------------Для названия и описания 

const [leftArmItemTitle, setLeftArmItemTitle] = useState(() =>  {
    const storedImage = localStorage.getItem('leftArmItemImage');
    return storedImage ? storedImage : '';
});

useEffect(() => {
    localStorage.setItem('leftArmItemImage', leftArmItemImage);
}, [leftArmItemImage]);

    ;



    // const handleTitleAndDisc = (title, disc) => {
    //     setSelectedItemImage(imageUrl);
    //     if (renderComponent === 'Equip') {
    //         setArmorItemImage(imageUrl);
    //     } 
    // };







// ----------------------------------
    const handleEquipClick = () => {
        SetRenderComponent('Equip');
    };
    // основная страница



    // слоты под итемы
    const handleLeftClick = () => {
        SetRenderComponent('Leftarm');
    };

    const handleRightClick = () => {
        SetRenderComponent('Rightarm');
    };

    const handleArtifactClick = () => {
        SetRenderComponent('Artifact');
    };

    const handleLeftLegClick = () => {
        SetRenderComponent('LeftLeg');
    };

    const handleRightLegClick = () => {
        SetRenderComponent('RightLeg');
    };

    const handleCloakClick = () => {
        SetRenderComponent('Cloak');
    };





     // вкладки
    const handleCharacterClick = () => {
        SetRenderComponent('Character');
    };

    const handleCubeClick = () => {
        SetRenderComponent('Cube');
    };
    
    const handleMagicClick = () => {
        SetRenderComponent('Magic');
    };

    const handleInventoryClick = () => {
        SetRenderComponent('Inventory');
    };

    const handleNoticeClick = () => {
        SetRenderComponent('Notice');
    };

    const handleHerostoryClick = () => {
        SetRenderComponent('Herostory');
    };
    

    // сейв пояса в лс
    const [beltslotone, setBeltSlotOne] = useState('')
    const [beltslottwo, setBeltSlotTwo] = useState('')
    const [beltslotthree, setBeltSlotThree] = useState('')

    useEffect(() => {
        const storedDataBelt = JSON.parse(localStorage.getItem('formDataBelt'));
        if (storedDataBelt) {
            setBeltSlotOne(storedDataBelt.beltslotone);
            setBeltSlotTwo(storedDataBelt.beltslottwo);
            setBeltSlotThree(storedDataBelt.beltslotthree);
        }
        }, []);

        const handleBlur = (e, setState) => {
            const { name, value } = e.target;
            setState(value);
            localStorage.setItem('formDataBelt', JSON.stringify({
                beltslotone,
                beltslottwo,
                beltslotthree,
            }));
            };

    return (
    <div className="container">
        <Header />
        <div className="main__wrapper">
            <div className="equip__stats">
                <div className="equip__container">
                    <Armor onClick={handleEquipClick} selectedItemImage={armorItemImage}  />
                
                    <LeftArm onClick={handleLeftClick} selectedItemImage={leftArmItemImage}/>
                
                    <RightArm onClick={handleRightClick} selectedItemImage={RightArmItemImage} />
                
                    <Artifact onClick={handleArtifactClick} selectedItemImage={ArtifactItemImage} />
                
                    <LeftLeg onClick={handleLeftLegClick} selectedItemImage={LeftLegItemImage} />

                    <RightLeg onClick={handleRightLegClick} selectedItemImage={RightLegItemImage}/>

                    <Cloak onClick={handleCloakClick} selectedItemImage={CloakItemImage} />
                </div>
                
                <div className="gray__split">
                </div>
                <div className="belt__section">
                    <span className="belt__title">ПОЯС</span>
                    <input className="belt__input" type="text"   value={beltslotone}  onChange={(e) => setBeltSlotOne(e.target.value)}  onBlur={(e) => handleBlur(e, setBeltSlotOne)}></input>
                    <input className="belt__input" type="text"  value={beltslottwo} onChange={(e) => setBeltSlotTwo(e.target.value)}  onBlur={(e) => handleBlur(e, setBeltSlotTwo)}></input>
                    <input className="belt__input" type="text"  value={beltslotthree} onChange={(e) => setBeltSlotThree(e.target.value)}  onBlur={(e) => handleBlur(e, setBeltSlotThree)}></input>
                </div>
                
                <Statses stats={itemStats}/>
            </div>

            <div className="main__mid">
                
                <div className="mid__nav">
                    <div  className="mid__nav__btn" type="button" onClick={handleEquipClick} >ЭКИПИРОВКА</div>
                    <div  className="mid__nav__btn" type="button" onClick={handleCharacterClick} >ПЕРСОНАЖ</div>
                    <div  className="mid__nav__btn" type="button" onClick={handleCubeClick} >КУБИК</div>
                    <div  className="mid__nav__btn" type="button" onClick={handleMagicClick} >МАГИЯ</div>
                    <div  className="mid__nav__btn" type="button" onClick={handleInventoryClick }>ИНВЕНТАРЬ</div>
                    <div  className="mid__nav__btn" type="button" onClick={handleNoticeClick}>ЗАМЕТКИ</div>
                    <div  className="mid__nav__btn" type="button" onClick={handleHerostoryClick}>ИСТОРИЯ</div>
                </div>
                <div className="mid__info">
                    
                    {renderComponent === 'Equip' && <Equip component={"Armor"} onItemImageChange={handleItemImageChange} onItemStatsChange={handleItemStatsChange} initialItemImage={armorItemImage} initialItemStats={armorItemStats} />}
                    {renderComponent === 'Leftarm' && <Equip component={"Weapon"} onItemImageChange={handleItemImageChange}  onItemStatsChange={handleItemStatsChange}   initialItemImage={leftArmItemImage} initialItemStats={leftArmItemStats} />}
                    {renderComponent === 'Rightarm' && <Equip component={"Weapon"} onItemImageChange={handleItemImageChange}  onItemStatsChange={handleItemStatsChange} initialItemImage={RightArmItemImage} initialItemStats={rightArmItemStats}/>}
                    {renderComponent === 'Artifact' && <Equip component={"Artifact"} onItemImageChange={handleItemImageChange}  onItemStatsChange={handleItemStatsChange} initialItemImage={ArtifactItemImage} initialItemStats={artifactItemStats}/>}
                    {renderComponent === 'LeftLeg' && <Equip component={"Boots"}  onItemImageChange={handleItemImageChange}  onItemStatsChange={handleItemStatsChange} initialItemImage={LeftLegItemImage} initialItemStats={leftLegItemStats}/>}
                    {renderComponent === 'RightLeg' && <Equip component={"Boots"} onItemImageChange={handleItemImageChange}  onItemStatsChange={handleItemStatsChange} initialItemImage={RightLegItemImage} initialItemStats={rightLegItemStats}/>}
                    {renderComponent === 'Cloak' && <Equip component={"Cloak"} onItemImageChange={handleItemImageChange}  onItemStatsChange={handleItemStatsChange} initialItemImage={CloakItemImage} initialItemStats={cloakItemStats}/>}
                    {renderComponent === 'Character' && <Character />} 
                    {renderComponent === 'Cube' && <Cube />}       
                    {renderComponent === 'Magic' && <Magic />}
                    {renderComponent === 'Inventory' && <Inventory />}
                    {renderComponent === 'Notice' && <Notice />}
                    {renderComponent === 'Herostory' && <Herostory />}
                </div>
            </div>
            
                <HPblock/>
        </div>
  </div>
  )
}

export default App;
