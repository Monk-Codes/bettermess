import React from "react";

const MenuCard = ({ menuData }) => {
    return (
        <>
            <section className="main-card--container" >
                {menuData.map((curElem) => {
                    const { id, name, category, price, description, image } = curElem;
                    return (
                        <>
                            <div className="card-container"key={curElem.id} >
                                <div className="card" >

                                    <div className="card-body">
                                        <span className="card-number card-circle subtle">{id}</span>
                                        <span className="card-author subtle">{category}</span>
                                        <h2 className="card-title">{name}</h2>
                                        <span className="card-decription subtle">{description}</span>
                                        <div className="card-read">Read</div>
                                    </div>

                                    <img src={image} alt="images" className="card-media" />
                                    <span className="card-tag subtle">Order Now</span>
                                    <span className="card-tag subtle">{price}</span>
                                </div>

                            </div>
                        </>
                    );
                })}
            </section>
        </>
    );
};

export default MenuCard;
