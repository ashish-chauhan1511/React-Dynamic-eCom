import React from "react";
import Head from "../Heading/Heading";
import { ImCheckboxChecked } from "react-icons/im";
import { MdHealthAndSafety } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { GiStrongMan } from "react-icons/gi";
import multyequip from "../../assets/multyequip.png";

const Quality = () => {
    const leftQualitys = qualitys.slice(0, 2).map(quality => {
        return (
            <div key={quality.id} className="qualiti">

                <div className="qualiti-icon"><span>{quality.icon}</span></div>
                <div className="qualiti-text">
                    <h1>{quality.title}</h1>
                    <p>{quality.para}</p>
                </div>
            </div>
        );
    });
    const rightQualitys = qualitys.slice(2).map(quality => {
        return (
            <div key={quality.id} className="qualiti chang">

                <div className="qualiti-icon"><span>{quality.icon}</span></div>
                <div className="qualiti-text updat">
                    <h1>{quality.title}</h1>
                    <p>{quality.para}</p>
                </div>
            </div>
        );
    });
    return (
        <div className="qualityparent">
            <div className="cate-head">
                <Head colored='Quality Without' normal='Compromise' />
            </div>
            <div className="quality-retun">
                <div className="quality-retun-text">{leftQualitys}</div>
                <div className="quality-retun-img"><img src={multyequip} /></div>
                <div className="quality-retun-text">{rightQualitys}</div>
            </div>
        </div>

    );
};
export default Quality

const qualitys = [
    {
        id: 0,
        title: 'Quality',
        para: 'Premium quality materials',
        icon: <FaStar />,
    },
    {
        id: 1,
        title: 'Durability',
        para: 'Long-lasting durability',
        icon: <GiStrongMan />,
    },
    {
        id: 2,
        title: 'Tested',
        para: 'Tested for performance',
        icon: <ImCheckboxChecked />,
    },
    {
        id: 3,
        title: 'Safe',
        para: 'Comfortable and safe to use',
        icon: <MdHealthAndSafety />,
    },
];