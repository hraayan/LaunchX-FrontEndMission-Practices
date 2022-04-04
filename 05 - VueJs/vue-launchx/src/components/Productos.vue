<template>
    <div class="container">
        <h3 >Nuestros Productos</h3>
        <div class="prod">
            
            <div class="card">
                <img class="img" src="https://www.chahrazadscuisine.com/wp-content/uploads/2020/03/19CEE6A7-729A-4933-B7E7-3006E01BEE97-1200x1226.jpeg" alt="pastel rosa" width="95%">
                <h2>Raspberry Cake</h2>
                <p class="price">$450.00</p>
                <p>Rico pastel de Frambuesa...</p>
               
            </div>
            <div class="card">
                <img class="img" src="http://images6.fanpop.com/image/photos/36100000/Cakes-image-cakes-36146474-457-640.jpg" alt="Spring Cake" style="width:95%">
                <h2>Spring Cake</h2>
                <p class="price">$380.00</p>
                <p>Pastel Primavera, ideal para 4 personas.</p>
                
            </div>
            <div class="card">
                <img class="img" src="https://www.u-buy.com.ng/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODFkMFpvSGNSbUwuX0FDX1NMMTUwMF8uanBn.jpg" alt="Rainbow Cake" style="width:95%">
                <h2>Rainbow Cake</h2>
                <p class="price">$690.00</p>
                <p>Rainbow Cake sabor chocolate blanco</p>
                
            </div>
            <div class="card">
                <img class="img" src="https://i.pinimg.com/736x/4b/b5/8c/4bb58cd8ee9df54ca57316a5d8b3605a.jpg" alt="chocolate cake" style="width:95%">
                <h2>Chocolate Cake</h2>
                <p class="price">$690.00</p>
                <p>Pastel de chocolate negro</p>
                
            </div>
            <br><br>
        </div><br>
        
    </div>

    <div class="container2">
        <h3 >Nuestros Adornos</h3>
        <div class="prod">
            
            <div class="card">
                <img class="img" src="https://i.ytimg.com/vi/NjWohYnJxhA/maxresdefault.jpg" alt="betun" width="95%">
                <h2>Betun Decorado</h2>
                <p class="price">$80.00</p>
                <p>Adornado con betun de sus colores a eleccion</p>
               
            </div>
            <div class="card">
                <img class="img" src="https://ae01.alicdn.com/kf/H33bf25cceae14c5eb15ee4aa540abebaG/Adornos-de-pastel-de-toro-de-ganado-suministros-de-feliz-cumplea-os-para-fiesta-del-D.jpg_Q90.jpg_.webp" alt="Spring Cake" style="width:95%">
                <h2>Figuras con Fondant</h2>
                <p class="price">$150.00</p>
                <p>Recubrimiento y figuras de fondant</p>
                
            </div>
            <div class="card">
                <img class="img" src="https://m.media-amazon.com/images/I/51PBpFkR3hL._SL500_.jpg" alt="letras" style="width:95%">
                <h2>Letras de madera</h2>
                <p class="price">$690.00</p>
                <p>Letras de madera recortadas a su eleccion</p>
                
            </div>
            <div class="card">
                <img class="img" src="https://i.pinimg.com/474x/9f/1a/8e/9f1a8ef6f38bd5aeb908bb60a1fb54ac.jpg" alt="fruta" style="width:95%">
                <h2>Frutos y Chocolate</h2>
                <p class="price">$690.00</p>
                <p>Adornado con frutos y chocolate derretido</p>
                
            </div>
            <br>
        </div>
        <br>
        
    </div>

    <div class="container2">
        <h3>Tu pedido</h3>
        <div class="prod2">
            <!-- <h4>Selecciona tu preferencia</h4> -->
           <img src="cakelogo.png" alt="" style="margin-left: 0px; margin-right: auto;">
            <form action="" style="margin-right: auto;">
                
                <div class="sabor"   style="padding-right: 15px; padding-left: 15px;">
                    <h4>Selecciona el sabor</h4>
                    <input type="checkbox" id="topping1" name="topping1" value="Raspberry">
                    <label for="topping1">Raspberry Cake</label>
                    
                    <input type="number" id="numero1" name="numero1" placeholder="Cantidad" class="cant">
                    <br>
                    <input type="checkbox" id="topping2" name="topping2" value="Spring" >
                    <label for="topping2">Spring Cake</label>
                    <input type="number" id="numero2" name="numero2" placeholder="Cantidad"  class="cant" style="margin-left: 40px;"><br>
                    <input type="checkbox" id="topping3" name="topping3" value="Rainbow">
                    <label for="topping3">Rainbow Cake</label>
                    <input type="number" id="numero3" name="numero3" placeholder="Cantidad" class="cant" style="margin-left: 23px;"><br>
                    <input type="checkbox" id="topping4" name="topping4" value="Chocolate">
                    <label for="topping3">Chocolate Cake</label>
                    <input type="number" id="numero4" name="numero4" placeholder="Cantidad" class="cant"><br><br>
                </div>
                <div class="sabor"  style="padding-right: 15px; padding-left: 15px;">
                    <h4>Selecciona el adorno</h4>
                    <input type="checkbox" id="topping1" name="topping1" value="Raspberry">
                    <label for="topping1">Betun Decorado</label>
                    
                    <br>
                    <input type="checkbox" id="topping2" name="topping2" value="Spring" >
                    <label for="topping2">Figuras de Fondant</label>
                    <br>
                    <input type="checkbox" id="topping3" name="topping3" value="Rainbow">
                    <label for="topping3">Letras de Madera</label>
                    <br>
                    <input type="checkbox" id="topping4" name="topping4" value="Chocolate">
                    <label for="topping3">Frutos y Chocolate</label>
                    <br><br>
                </div>
                <div class="sabor"  style="padding-right: 15px; padding-left: 15px;">
                    <h4>Comentarios adicionales</h4>
                    <textarea type="text" id="comentarios" name="comentarios" rows="6" cols="30"></textarea>
                </div>
                <div class="sabor" style="text-align: center; font-size: medium; padding-left: 15px;padding-right: 15px;">
                    <h4>Ingresa tus datos</h4>
                    <label for="nombre">Nombre Completo</label><br>
                    <input type="text" id="nombre" name="nombre"><br>

                    <label for="correo1">Correo electronico</label><br>
                    <input type="email" id="correo1" name="correo1"><br>
                    
                    <label for="tel1">Teléfono</label><br>
                    <input type="tel" id="tel1" name="tel1" maxlength="10"><br>
                   
                </div>
                <br><br>
                <button class="btn" onclick="alert('Pedido Enviado')">Enviar pedido</button>
            </form>
        </div>
        
    </div>
    <br><br><br><br>
   
</template>

<script>
export default {
  name: "Productos",
};
</script>