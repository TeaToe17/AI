import { useState } from "react";
import Pagescomp from "./pagescomp";
import "./blog-pages.css"

export default function Pages() {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);
  const [fifth, setFifth] = useState(false);
  const [sixth, setSixth] = useState(false);

  const firstHandle = () => {
    setFirst(true);
    setSecond(false);
    setThird(false);
    setFourth(false);
    setFifth(false);
    setSixth(false);
  };
  const secondHandle = () => {
    setFirst(false);
    setSecond(true);
    setThird(false);
    setFourth(false);
    setFifth(false);
    setSixth(false);
  };
  const thirdHandle = () => {
    setFirst(false);
    setSecond(false);
    setThird(true);
    setFourth(false);
    setFifth(false);
    setSixth(false);
  };
  const fourthHandle = () => {
    setFirst(false);
    setSecond(false);
    setThird(false);
    setFourth(true);
    setFifth(false);
    setSixth(false);
  };
  const fifthHandle = () => {
    setFirst(false);
    setSecond(false);
    setFifth(false);
    setFourth(false);
    setFifth(true);
    setSixth(false);
  };
  const sixthHandle = () => {
    setFirst(false);
    setSecond(false);
    setFifth(false);
    setFourth(false);
    setFifth(false);
    setSixth(true);
  };

  return (
    <>
      <div className="pagesdiv">
        <div className="pagesbacklight"></div>
        <div className="pagesheader">
          <h3>Mixland helps you build beautiful website</h3>
        </div>
        <div className="flexBasic">
          <div className="pagesblock">
            <div className="buttonsdiv">
              <button onClick={firstHandle}>Blog Headlines</button>
              <button onClick={secondHandle}>Blog intros</button>
              <button onClick={thirdHandle}>Content rewriter</button>
              <button onClick={fourthHandle}>Facebook ads</button>
              <button onClick={fifthHandle}>Project description</button>
              <button onClick={sixthHandle}>PAS copywriting formula</button>
            </div>
            <div className="display">
              <div className="circle">
                <div></div>
                <div></div>
                <div></div>
              </div>
              {first && (
                <div>
                  <Pagescomp
                    title="4 Blog headlines generated"
                    li1="Create original content that ranks for seo"
                    li2="Any mechanical keyboard enthusiast in design?"
                    li3="The more important the Work,The more important the Rest"
                    li4="How to design a product that can grow itself 10x in a year"
                  />
                </div>
              )}
              {second && (
                <div>
                  <Pagescomp
                    title="5 Blog headlines generated"
                    li1="Create original content that ranks for seo"
                    li2="How to design a product that can grow itself 10x in a year"
                    li3="The more important the Work,The more important the Rest"
                    li4="Any mechanical keyboard enthusiast in design?"
                  />
                </div>
              )}
              {third && (
                <div>
                  <Pagescomp
                    title="6 Blog headlines generated"
                    li1="The more important the Work,The more important the Rest"
                    li2="Any mechanical keyboard enthusiast in design?"
                    li3="Create original content that ranks for seo"
                    li4="How to design a product that can grow itself 10x in a year"
                  />
                </div>
              )}
              {fourth && (
                <div>
                  <Pagescomp
                    title="7 Blog headlines generated"
                    li1="The more important the Work,The more important the Rest"
                    li2="Any mechanical keyboard enthusiast in design?"
                    li3="Create original content that ranks for seo"
                    li4="How to design a product that can grow itself 10x in a year"
                  />
                </div>
              )}
              {fifth && (
                <div>
                  <Pagescomp
                    title="8 Blog headlines generated"
                    li1="Create original content that ranks for seo"
                    li2="Any mechanical keyboard enthusiast in design?"
                    li3="The more important the Work,The more important the Rest"
                    li4="How to design a product that can grow itself 10x in a year"
                  />
                </div>
              )}
              {sixth && (
                <div>
                  <Pagescomp
                    title="9 Blog headlines generated"
                    li1="How to design a product that can grow itself 10x in a year"
                    li2="Any mechanical keyboard enthusiast in design?"
                    li3="The more important the Work,The more important the Rest"
                    li4="Create original content that ranks for seo"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
