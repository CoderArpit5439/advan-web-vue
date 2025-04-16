<template>
    <div class="site__body ">
        <div class="block-space block-space--layout--after-header"></div>
        <div class="block">
            <div class="container container--max--xl">
                <div class="row">
                    <DashSideMenu />
                    <div class="col-12 col-lg-9 mt-4 mt-lg-0">
                        <div class="card">
                            <div class="card-header">
                                <h5>Order History</h5>
                            </div>
                            <div class="card-divider"></div>
                            <div class="card-table">
                                <div class="table-responsive-sm">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Order</th>
                                                <th>Date</th>
                                                <th>Status</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><a href="/dashboard/order-detail" style="color: #cb1818;">#8132</a></td>
                                                <td>02 April, 2019</td>
                                                <td>Pending</td>
                                                <td>12,719.00 for 5 item(s)</td>
                                            </tr>
                                            <tr>
                                                <td><a href="/dashboard/order-detail" style="color: #cb1818;">#7592</a></td>
                                                <td>28 March, 2019</td>
                                                <td>Pending</td>
                                                <td>1374.00 for 3 item(s)</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="card-divider"></div>
                            <div class="card-footer">
                                <ul class="pagination" >
                                    <li class="page-item disabled"><a class="page-link page-link--with-arrow" href="#"
                                            aria-label="Previous"><span class="page-link__arrow page-link__arrow--left"
                                                aria-hidden="true"><i class="fa fa-chevron-left"></i></span></a></li>
                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item active" aria-current="page"><span class="page-link">2 <span
                                                class="sr-only">(current)</span></span></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item"><a class="page-link" href="#">4</a></li>
                                    <li class="page-item page-item--dots">
                                        <div class="pagination__dots"></div>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">9</a></li>
                                    <li class="page-item"><a class="page-link page-link--with-arrow" href="#"
                                            aria-label="Next"><span class="page-link__arrow page-link__arrow--right"
                                                aria-hidden="true"><i class="fa fa-chevron-right"></i></span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="block-space block-space--layout--before-footer"></div>
    </div>
</template>