import css from  "./predictor.css";
import React, {useEffect, useState} from "react";
import styled from "styled-components";

export function Predictor() {
    const [cResponse, setcResponse] = useState([]);
    
    const getRes = async () =>{
        const requestDict = {
            method : "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };
        const response = await fetch("http://127.0.0.1:8000/predict",requestDict);
        const data = await response.json();
        console.log(data.col_props);

        if(!response.ok) {console.log("response not working properly");}
        else{
            setcResponse(data.col_props);
        }
    }

    useEffect(() => {
        getRes();
    }, []);
    // return(<div>{cResponse}</div>);
    return(<MacBookPro161{...macBookPro161Data} />);
}


function MacBookPro161(props){
    const { publication, thePerovskiteSolar, limitMessage, header, frame61Props, frame62Props, frame5Props, dropdownProps } = props;
    return(
        <div className="container-center-horizontal">
            <div className="macbook-pro-16-1 screen">
                <OverlapGroup3>
                    <OverlapGroupContainer>
                        <OverlapGroup>
                            <Frame1></Frame1>
                            <Frame6>{frame61Props.children}</Frame6>
                            <Frame6 className={frame62Props.className}>
                                {frame62Props.children}
                            </Frame6>
                            <Frame8>
                                <PUBLICATION>
                                    {publication}
                                </PUBLICATION>
                            </Frame8>
                            <Ellipse3></Ellipse3>
                            <Frame5>
                                {frame5Props.children}
                            </Frame5>
                        </OverlapGroup>
                        <OverlapGroup1>
                            <Ellipse2 src="./assets/ellipse-2.svg" />
                            <THEPEROVSKITESOLAR>
                                {thePerovskiteSolar}
                            </THEPEROVSKITESOLAR>
                            <Dropdown dropdown={dropdownProps.dropdown} arrow={dropdownProps.arrow1} />
                            < LIMITMESSAGE>{limitMessage}</LIMITMESSAGE>
                            <HEADER>{header}</HEADER>
                        </OverlapGroup1>
                    </OverlapGroupContainer>
                    <Ellipse1></Ellipse1>
                </OverlapGroup3>
            </div>
        </div>
    );
}

const OverlapGroup3 = styled.div`
    width: 2340px;
    height: 2150;
    position: relative;
    margin-left: -493px;
    margin-top: -232px;`;

const OverlapGroupContainer = styled.div`
    position: absolute;
    width: 2430px;
    height: 1791px;
    top: 359px;
    left: 0;`;


const OverlapGroup = styled.div`
    position: absolute;
    width: 1847px;
    height: 790px;
    top: 1001px;
    left: 493px;`;

const Frame1 = styled.div`
    position: absolute;
    width: 1521px;
    height: 354px;
    top: 436px;
    left: 0;
    background: linear-gradient(
        180deg,
        rgb(77.06667423248291, 107.71200701594353, 136.00000709295273) 0%,
        rgb(77.06667423248291, 107.71200701594353, 136.00000709295273) 100%);`;

    
const Frame8 = styled.div`
    position: absolute;
    width: 230px;
    height: 59px;
    top: 543px;
    left: 1001px;
    display: flex;
    padding: 8px 7px;
    align-items: flex-start;`;

export const ValignTextMiddle = css`
    display: flex;
    flex-direction: column;
    justify-content: center;`;

export const MondaBoldWhite24px = css`
    color: var(--white);
    font-family: var(--font-family-monda);
    font_size: var(--font-size-s);
    font-weight: 700;
    font-style: normal;`;

export const MondaBoldWhite12px = css`
    color: var(--white);
    font-family: var(--font-family-monda);
    font_size: var(--font-size-s2);
    font-weight: 700;
    font-style: normal;`;

const PUBLICATION = styled.div`
        ${ValignTextMiddle}
        ${MondaBoldWhite24px}
            width: 189px;
        height: 33px;
        text-align: center;
        letter-spacing: 0;`;

const Ellipse3 = styled.div`
    position: absolute;
    width: 755px;
    height: 743px;
    top: 0;
    left: 1092px;
    background-color: var(--perano);
    border-radius: 377.5px/371.5px;
    filter: blur(200px);
    mix-blend-mode: overlay;`;

const OverlapGroup1 = styled.div`
    position: absolute;
    width: 1273px;
    height: 1278px;
    top: 0;
    left: 0;`;

const Ellipse2 = styled.div`
        position: absolute;
        width: 1155px;
        height: 1143px;
        top: 135px;
        left: 0;
        mix-blend-mode: color-burn;`;

const THEPEROVSKITESOLAR = styled.h1`
    position: absolute;
    width: 485px;
    top: 0;
    left: 788px;
    font-family: var(--font-family-monda);
    font-weight: 700;
    color: var(--white);
    font-size: var(--font-size-m);
    letter-spacing: 0;`;

const LIMITMESSAGE = styled.div`
    ${ValignTextMiddle}
    position: absolute;
    width: 249px;
    height: 34px;
    top: 361px;
    left: 790px;
    font-family: var(--font-family-monda);
    font-weight: 700;
    color: #1e0c0c;
    font-size: var(--font-size-s2);
    text-align: center;
    letter-spacing: 0;`;


const HEADER = styled.div`
    ${ValignTextMiddle}
    ${MondaBoldWhite12px}
    position: absolute;
    width: 249px;
    height: 34px;
    top: 317px;
    left: 788px;
    letter-spacing: 0;`;

const Ellipse1 = styled.div`
    position: absolute;
    width: 755px;
    height: 743px;
    top: 0;
    left: 1450;
    background-color: var(--perano);
    border-radius:377.5px/371.5px;
    filter: blur(200px);
    mix-blend-mode: overlay;`;


function Frame6(props){
    const { children, className } = props;
    return(<Frame61 className={`frame-6 ${className || ''}`}>
        <CREDITS className= "credits">
            {children}
        </CREDITS>
    </Frame61>);
}

const Frame61 = styled.div`
    position: absolute;
    width: 230px;
    height: 59px;
    top: 539px;
    left: 281px;
    display: flex;
    padding: 8px 33px;
    align-items: flex-start;
    &.frame-6.frame-7 {
        left: 641px;
    }`;

const CREDITS = styled.div`
    ${ValignTextMiddle}
    ${MondaBoldWhite24px}
    width: 163px;
    height: 42px;
    text-align: center;
    letter-spacing: 0;`;

function Frame5(props){
    const { children } = props;

    return (<Frame51>
        <PREDICT>{children}</PREDICT>
    </Frame51>);
}




const Frame51 = styled.div`
    position: absolute;
    height: 65px;
    top: 339px;
    left: 911px;
    display: flex;
    padding: 7px 35px;
    align-items: flex-start;
    min-width: 230px;
    background-color: #10341e;`;

const PREDICT = styled.div`
    ${ValignTextMiddle}
    ${MondaBoldWhite24px}
        width: 163px;
    height: 42px;
    text-align: center;
    letter-spacing: 0;`;

function Dropdown(props){
    const { dropdown, arrow1 } = props;
    return(<Dropdown1>
        <DROPDOWN>{dropdown}</DROPDOWN>
        <Arrow1 src={arrow1} />
    </Dropdown1>);
}

const Dropdown1 = styled.div`
    position: absolute;
    height: 37px;
    top: 409px;
    left: 788px;
    display: flex;
    padding: 7.5px 15.4px;
    justify-content: flex-end;
    align-items: flex-start;
    min-width: 251px;
    background-color: var(--white);`;

const DROPDOWN = styled.div`
    width: 179px;
    min-height: 19px;
    margin-top: 0.5px;
    font-family: var(--font-family-monda);
    font-weight: 700;
    color: var(--black);
    font-size: var(--font-size-s2);
    letter-spacing: 0;`;

const Arrow1 = styled.div`
    width: 19px;
    height: 20px;
    align-self: flex-end;
    margin-lift: 18px;`;




const frame61Data = {
    children: "CREDITS",
};

const frame62Data = {
    children: "REFERENCES",
    className: "frame-7",
};

const frame5Data = {
    children: "PREDICT",
};

const dropdownData = {
    dropdown: "DROPDOWN",
    arrow1: "arrow-1.svg",
};

const macBookPro161Data = {
    pulication: "PULICATION",
    thePerovskiteSolar: (
        <React.Fragment>
            THE PEROVSKITE SOLAR CELL <br />
            EFFICIENCY PREDICTOR 
        </React.Fragment>
    ),
    limitMessage: "LIMIT MESSAGE",
    header: "HEADER",
    frame61Props: frame61Data,
    frame62Props: frame62Data,
    frame5Props: frame5Data,
    dropdownProps: dropdownData,
};
















        //custom codes
{/* <div id="predictor_main">
        {cResponse.map(col =>(
        <div>{col.type == "categorical" ? 
            <div><h1>this is categorical</h1>
            <h2>{col.title}</h2>
            <select id="categorical_drop">
                {col.u_val.map(val =>(
                    <option value={val}>{val}</option>
                ))}
            </select></div> :
            <div><h2>enter value between {col.min} and {col.max}</h2>
            <h1>{col.title}</h1>
            <input type="number" name="numerical"></input></div>}</div>
        ))}
        </div> */}