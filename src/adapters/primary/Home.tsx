import React from "react";

import iconCat from "../../assets/images/icon-chat.png";
import iconMoney from "../../assets/images/icon-money.png";
import iconSecurity from "../../assets/images/icon-security.png";

import { FeatureItem } from "../components/Feature-item";

export const Home = () => {
    return(
        <main className='main'>
            <div className="hero">
                <section className="hero-content">
                    <h2 className="sr-only">Promoted Content</h2>
                    <p className="subtitle">No fees.</p>
                    <p className="subtitle">No minimum deposit.</p>
                    <p className="subtitle">High interest rates.</p>
                    <p className="text">Open a savings account with Argent Bank today!</p>
                </section>
            </div>
            <section className="features">
                <h2 className="sr-only">Features</h2>

                <FeatureItem
                    iconLink={iconCat}
                    title="You are our #1 priority" 
                    content="Need to talk to a representative? You can get in touch through our
                    24/7 chat or through a phone call in less than 5 minutes." />

                <FeatureItem
                    iconLink={iconMoney}
                    title="More savings means higher rates" 
                    content="The more you save with us, the higher your interest rate will be!" />
            
                <FeatureItem
                    iconLink={iconSecurity}
                    title="Security you can trust" 
                    content="We use top of the line encryption to make sure your data and money
                    is always safe." />
                    
            </section>
        </main>
    );
}