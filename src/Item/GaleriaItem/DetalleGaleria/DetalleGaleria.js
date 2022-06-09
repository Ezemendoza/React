import "./DetalleGaleria.css"
const DetalleGaleriaItem = ({item}) => {

return(
    <div> 
    <nav className="navbar navbar-expand-lg navbar-light">
    
<div class="collapse navbar-collapse " id="navbarNavGaleria">
  
  <ul class="navbar-nav mb-lg-0 pl-4 barraCentral ">

   
      <li class="nav-item ml-4" id="palabraHeader">
        <a class="nav-link" href="#galeria__detalles">Detalles</a>
        </li>
        <li class="nav-item ml-4" id="palabraHeader">
          <a class="nav-link" href="#galeria__descripcion">Descripcion</a>
          </li>
       
          </ul>
          </div>
        </nav>

  <div class="product-description mb-5" id="galeria__detalles">
    <h2 class="mb-5">Detalles</h2>
    <dl class="row mb-5">
      <dt class="col-sm-3 ">Marca</dt>
      <dd class="col-sm-9 marca">{item.marca}</dd>
      <dt class="col-sm-3">Modelo</dt>
      <dd class="col-sm-9">{item.modelo}</dd>
      <dt class="col-sm-3">Color</dt>
      <dd class="col-sm-9 color">{item.color}</dd>
    
    </dl>
    <h2 class="mb-5" id="galeria__descripcion">Descripcion</h2>
  <p>{item.descripcion}</p>

</div>


</div>

)}

export default DetalleGaleriaItem
