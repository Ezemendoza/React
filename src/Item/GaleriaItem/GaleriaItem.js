import { useEffect, useState } from "react";
import  "./GaleriaItem.css"
import camion from '../../img/camion.png'
import tarjeta from '../../img/tarjeta.png'
import DetalleGaleriaItem from "./DetalleGaleria/DetalleGaleria";
import { Link } from "react-router-dom";


const GaleriaItem = ({item}) => {
    useEffect(()=>{
        const fotoLista = document.querySelectorAll(".thumbnails-list li");

        const fotoPrincipal = document.querySelector(".product-gallery-featured img");
    
        fotoLista.forEach((item) => {
          item.addEventListener("mouseover",  ()=> {
            let imagen = item.children[0].src;
            fotoPrincipal.src = imagen;
          });
        }, [fotoPrincipal]);
    
    })
  
    let [contador, setContador]=useState(1)
      
    const incrementar = ()=>{
    
    if(item.stock>0 ) (setContador(item.stock=item.stock-1)) 
    else(contador=contador-1)
    setContador(contador=contador+1)
    }
    const restar = ()=>{
     if(contador>0)setContador((item.stock=item.stock+1) && (contador=contador-1))
    
    }
    const cuota = item.precio/6
    return (
      
        <div class="row">
          <div class="col-lg-12">
            <div class="card mb-10">
              <div class="card-header">
                <nav class="header-navigation">
                  <a href="#" class="btn btn-link"></a>
                 
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to={"/"}>Inicio</Link></li>
                    <li class="breadcrumb-item"> <Link to={"/categorias/lupa"}>{item.categoria}</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">{item.nombre}</li>
                  </ol>
  
                </nav>
              <div class="card-body store-body ">
                <div class="product-info ">
                  <div class="product-gallery ">
                    <div class="product-gallery-thumbnails">
                      <ol class="thumbnails-list list-unstyled">
                        <li><img src={item.img} alt=""/></li>
                        <li><img src={item.img2} alt=""/></li>
                        <li><img src={item.img3} alt=""/></li>
                      </ol>
                    </div>
                    <div class="product-gallery-featured">
                      <img src={item.img} alt="" className="imagen__galeria"/>
                    </div>
                  </div>
              <DetalleGaleriaItem item={item}/>
                              </div>
                              <div className="product-detail col-4">
                <h2 className="titulo-producto">{item.nombre}</h2>
              
             <h4>$ {item.precio}</h4>
             <div className="columnas-detail">
             <div className="item-tarjeta"><img src={tarjeta}/> 6x cuotas sin interes de  ${cuota}</div>
             <img src={camion}/> Envios a todo Buenos Aires</div>
             <p className="text-muted">Aproximadamente en 72 horas en tu casa</p>
             <p>Ultimos {item.stock} disponible!</p>
          <div className=" input-detail">
              <span onClick={restar}>-</span><input type="number" value={contador} className=" text-center"/><span onClick={incrementar}>+</span>
          </div>
          <button onClick={incrementar} className='btn btn-primary w-100' > Comprar</button></div>
                              </div>
                              
                              </div>
                              </div>
                              
                              </div>
                              </div>
                          
                    
                              
    )
}

export default GaleriaItem

