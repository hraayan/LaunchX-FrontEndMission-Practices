<template>
    <div class="container2">
        <h3 >Tabla de pedidos</h3>
        <div class="prod2">
            <table style="border-radius:8px ;">
                <tr>
                <th>Num. Pedido</th>
                <th>Cliente</th>
                <th>Articulos</th>
                <th>Monto Total</th>
                </tr>
                <tr>
                <td>LC00213</td>
                <td>Maria Anders</td>
                <td>1 Rainbow Cake <br>1 Chocolate Cake <br>Adorno de Fresas Con Chocolate</td>
                <td>$500.50</td>

                </tr>
                <tr>
                <td>LC0023658</td>
                <td>Francisco Chang</td>
                <td>2 Spring Cake Adorno de Betun <br>1 Raspberry Cake <br> 2 Letras adornadas</td>
                <td>$864.00</td>
                </tr>

                <tr>
                    <td>LC002654</td>
                    <td>Juanita Gonzales</td>
                    <td>1 Raspberry Cake con Fresas y Chocolate <br>Adorno de Fondant </td>
                    <td>$455.00</td>
                </tr>
                
                <tr>
                    <td>LC01254</td>
                    <td>Pepe Torres</td>
                    <td>1 Spring Cake Adorno de Betun <br>1 Chocolate Cake <br>1 Rainbow Cake <br> 2 Letras adornadas <br>1 Figura de Fondant</td>
                    <td>$2450.00</td>
                </tr>
            </table>
        </div>
        
    </div>
</template>

<script>
export default {
  name: "Pedidos",
};
</script>