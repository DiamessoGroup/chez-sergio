<template>
  <div class="Cart">
    <div class="container">
      <div class="wrapper wrapper-content animated fadeInRight">
        <div class="row">
          <div class="col-md-9">
            <div class="ibox">
              <div class="ibox-title">
                <span class="pull-right">(<strong>5</strong>) items</span>
                <h5>Items in your cart</h5>
              </div>
              <div class="ibox-content">
                <div class="table-responsive">
                  <table class="table shopping-cart-table">
                    <tbody>
                    <tr>
                      <td width="90">
                        <div class="cart-product-imitation"></div>
                      </td>
                      <td class="desc">
                        <h3>
                          <a class="product-link" href="#"> Desktop publishing software </a>
                        </h3>
                        <p class="small">
                          It is a long established fact that a reader will be distracted by the readable content of a
                          page when looking at its layout. The point of using Lorem Ipsum is
                        </p>

                        <div class="m-t-sm">
                          <a class="text-muted" href="#"><i class="fa fa-trash"></i> Remove item</a>
                        </div>
                      </td>

                      <td>$180,00</td>
                      <td width="65">
                        <input class="form-control input-number" min="1" placeholder="1" type="text"/>
                      </td>
                      <td>
                        <h4>$180,00</h4>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="ibox-content">
                <div class="table-responsive">
                  <table class="table shopping-cart-table">
                    <tbody>
                    <tr>
                      <td width="90">
                        <div class="cart-product-imitation"></div>
                      </td>
                      <td class="desc">
                        <h3>
                          <a class="product-link" href="#"> Text editor </a>
                        </h3>
                        <p class="small">There are many variations of passages of Lorem Ipsum available</p>
                        <div class="m-t-sm">
                          <a class="text-muted" href="#"><i class="fa fa-trash"></i> Remove item</a>
                        </div>
                      </td>

                      <td>$50,00</td>
                      <td width="65">
                        <input class="form-control input-number" min="1" placeholder="1" type="text"/>
                      </td>
                      <td>
                        <h4>$100,00</h4>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="ibox-content">
                <div class="table-responsive">
                  <table class="table shopping-cart-table">
                    <tbody>
                    <tr>
                      <td width="90">
                        <div class="cart-product-imitation"></div>
                      </td>
                      <td class="desc">
                        <h3>
                          <a class="product-link" href="#"> CRM software </a>
                        </h3>
                        <p class="small">
                          Distracted by the readable content of a page when looking at its layout. The point of using
                          Lorem Ipsum is
                        </p>
                        <div class="m-t-sm">
                          <a class="text-muted" href="#"><i class="fa fa-trash"></i> Remove item</a>
                        </div>
                      </td>

                      <td>$110,00</td>
                      <td width="65">
                        <input class="form-control input-number" min="1" placeholder="1" type="text"/>
                      </td>
                      <td>
                        <h4>$110,00</h4>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="ibox-content">
                <button class="btn btn-primary pull-right"><i class="fa fa fa-shopping-cart"></i> Checkout</button>
                <button class="btn btn-white"><i class="fa fa-arrow-left"></i> Continue shopping</button>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="ibox">
              <div class="ibox-title">
                <h5>Cart Summary</h5>
              </div>
              <div class="ibox-content">
                <span> Total </span>
                <h2 class="font-bold">$390,00</h2>

                <hr/>
                <div class="m-t-sm">
                  <div class="btn-group">
                    <a class="btn btn-primary btn-sm" href="#"><i class="fa fa-shopping-cart"></i> Checkout</a>
                    <a class="btn btn-white btn-sm" href="#"> Cancel</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="ibox">
              <div class="ibox-title">
                <h5>Support</h5>
              </div>
              <div class="ibox-content text-center">
                <h3><i class="fa fa-phone"></i> +1.409.553.2323</h3>
                <span class="small"> Please contact with us if you have any questions. </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
};
</script>

<style lang="scss">
@import "Cart";
</style>
