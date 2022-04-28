import React from "react";
import { BiRightTopArrowCircle } from "react-icons/bi";

function Footer() {
   return (
      <div className="footer">
         <div className="footer__column">
            <div className="footer-column__item">
               <div className="footer-category">
                  <h3 className="footer-category__title">
                     Productos y servicios
                  </h3>
                  <div>
                     <ul>
                        <li className="footer-category__link">Smartphones</li>
                        <li className="footer-category__link">Tablets</li>
                        <li className="footer-category__link">Audio</li>
                        <li className="footer-category__link">Smart Switch</li>
                        <li className="footer-category__link">
                           Accesorios para Móviles
                        </li>
                        <li className="footer-category__link">TVs</li>
                        <li className="footer-category__link">Lifestyle TV</li>
                        <li className="footer-category__link">
                           Dispositivos de Audio
                        </li>
                        <li className="footer-category__link">Heladeras</li>
                        <li className="footer-category__link">Climatización</li>
                        <li className="footer-category__link">Cocina</li>
                        <li className="footer-category__link">Monitores</li>
                     </ul>
                  </div>
               </div>
            </div>
            <div className="footer-column__item">
               <div className="footer-category">
                  <h3 className="footer-category__title">Shop</h3>
                  <div>
                     <ul>
                        <li className="footer-category__link">Ofertas</li>
                        <li className="footer-category__link">
                           Buscar Locales
                        </li>
                        <li className="footer-category__link">
                           Samsung Experience Store
                        </li>
                        <li className="footer-category__link">
                           Samsung Members
                        </li>
                        <li className="footer-category__link">
                           Botón de Arrepentimiento
                           <BiRightTopArrowCircle />
                        </li>
                        <li className="footer-category__link">
                           Preguntas frecuentes del Shop
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
            <div className="footer-column__item">
               <div className="footer-category">
                  <h3 className="footer-category__title">Soporte</h3>
                  <div>
                     <ul>
                        <li className="footer-category__link">
                           Chat Online <BiRightTopArrowCircle />
                        </li>
                        <li className="footer-category__link">
                           Email de Soporte
                        </li>
                        <li className="footer-category__link">
                           Teléfono de Soporte
                        </li>
                        <li className="footer-category__link">
                           Soporte de Samsung Argentina
                        </li>
                        <li className="footer-category__link">
                           Comunidad
                           <BiRightTopArrowCircle />
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
            <div className="footer-column__itemr">
               <div className="footer-category">
                  <h3 className="footer-category__title">Sustentabilidad</h3>
                  <div>
                     <ul>
                        <li className="footer-category__link">Resumen</li>
                        <li className="footer-category__link">Medioambiente</li>
                        <li className="footer-category__link">
                           Ciudadanía corporativa
                        </li>
                        <li className="footer-category__link">
                           Responsabilidad Digital
                        </li>
                        <li className="footer-category__link">
                           TRanajo y derechos humanos
                        </li>
                        <li className="footer-category__link">
                           Diversidad e inclusión
                        </li>
                        <li className="footer-category__link">
                           Cadena de suministro sustentable
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
         <div className="footer-bottom">
            <div className="footer-copyright-wrap">
               <p className="footer__copy">
                  2022 &#169;{" "}
                  <a
                     href="https://www.linkedin.com/in/fabiandasilva/"
                     target="_blank"
                     rel="noreferrer"
                  >
                     J. Fabian Da Silva S
                  </a>
                  . All right reserved.
               </p>
            </div>
         </div>
      </div>
   );
}

export default Footer;
