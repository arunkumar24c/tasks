import React from "react";
import "./topproduct.css"
import pic1 from "../../assest/coffeecat.jpg"
import pic2 from "../../assest/councat.jpg"
import pic3 from "../../assest/gheecat.jpg"
import pic4 from "../../assest/honeycat.jpg"
import pic5 from "../../assest/karuppu.jpg";
import pic6 from "../../assest/savcat.jpg";
import pic7 from "../../assest/sweetscat.jpg";

const TopProduct = () => {
  return (
    <div>
      <div class="Categorie-container">
        
        <div class="Categorie-text">
          <p className="text-[green] font-semibold text-lg">~ Top Categories ~</p>
          <h2 className="font-bold text-2xl text-[#4242ad] ">Shop By Categories</h2>
          <p className="text-[#9e9b9b]">
            The liber tempor cum soluta nobis eleifend option congue doming quod
            mazim.
          </p>
        </div>
        <div class="Categorie-weap">
          {/* 1st */}
          <div class="Categorie-weap-item">
            <div class="start">
              <p className="text-[#4444a7]">Sweets</p>
              <p className="text-[green]">10 items</p>
            </div>
            <div class="image-container">
              <img class="zoomed-image" src={pic7} alt="Image" />
              <div class="icon-container">
                <div class="icon">+</div>
              </div>
            </div>
          </div>
{/* 2nd */}
          <div class="Categorie-weap-item">
            <div class="start">
              <p className="text-[blue]">Sweets</p>
              <p className="text-[green]">19 items</p>
            </div>
            <div class="image-container">
              <img class="zoomed-image" src={pic6} alt="Image" />
              <div class="icon-container">
                <div class="icon">+</div>
              </div>
            </div>
          </div>

          <div class="Categorie-weap-item">
            <div class="start">
              <p className="text-[blue]">Coffee</p>
              <p className="text-[green]">09 items</p>
            </div>
            <div class="image-container">
              <img class="zoomed-image" src={pic1} alt="Image" />
              <div class="icon-container">
                <div class="icon">+</div>
              </div>
            </div>
          </div>

          <div class="Categorie-weap-item">
            <div class="start">
              <p className="text-[blue]">Daily Staples</p>
              <p className="text-[green]">09 items</p>
            </div>
            <div class="image-container">
              <img class="zoomed-image" src={pic2} alt="Image" />
              <div class="icon-container">
                <div class="icon">+</div>
              </div>
            </div>
          </div>

          <div class="Categorie-weap-item">
            <div class="start">
              <p className="text-[blue]">honey and Sweetners</p>
              <p className="text-[green]">10 items</p>
            </div>
            <div class="image-container">
              <img class="zoomed-image" src={pic4} alt="Image" />
              <div class="icon-container">
                <div class="icon">+</div>
              </div>
            </div>
          </div>

          <div class="Categorie-weap-item">
            <div class="start">
              <p className="text-[blue]">coffee</p>
              <p className="text-[green]">19 items</p>
            </div>
            <div class="image-container">
              <img class="zoomed-image" src={pic2} alt="Image" />
              <div class="icon-container">
                <div class="icon">+</div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default TopProduct;
