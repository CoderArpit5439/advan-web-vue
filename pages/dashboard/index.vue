<template>
    <div class="site__body">
        <div class="block-space block-space--layout--after-header"></div>
        <div class="block">
            <div class="container container--max--xl">
                <div class="row">
                    <DashSideMenu />
                    <div class="col-12 col-lg-9 mt-4 mt-lg-0">
                        <div class="dashboard">
                            <div class="dashboard__profile card profile-card">
                                <div class="card-body profile-card__body">
                                    <div class="profile-card__avatar">
                                        <!-- <img :src="ProfileImage" alt=""> -->
                                        <img src="https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="">
                                    </div>
                                    <div class="profile-card__name">{{ fullName }}</div>
                                    <div class="profile-card__email">{{ emailId }}</div>
                                    <div class="profile-card__edit"><a href="account-profile.html"
                                        class="btn btn-secondary btn-sm">Edit Profile</a>
                                    </div>
                                </div>
                            </div>
                            <div class="dashboard__address card address-card address-card--featured">
                                <div class="address-card__badge tag-badge tag-badge--theme">{{ status }}</div>
                                <div class="address-card__body">
                                    <div class="address-card__name">{{ fullName }}</div>
                                    <div class="address-card__row">
                                        <div class="address-card__row-title">Address</div>
                                        <div class="address-card__row-content">{{ address }}</div>
                                    </div>
                                    <div class="address-card__row">
                                        <div class="address-card__row-title">Phone Number</div>
                                        <div class="address-card__row-content">{{ phoneNumber }}</div>
                                    </div>
                                    <div class="address-card__row">
                                        <div class="address-card__row-title">Email Address</div>
                                        <div class="address-card__row-content">{{ emailId }}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="dashboard__orders card">
                                <div class="card-header">
                                    <h5>Recent Orders</h5>
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
                                                    <td><a href="/dashboard/order-detail"
                                                            style="color: #cb1818;">#8132</a></td>
                                                    <td>02 April, 2023</td>
                                                    <td>Pending</td>
                                                    <td>12,719.00 for 5 item(s)</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="block-space block-space--layout--before-footer"></div>
    </div><!-- site__body / end --><!-- site__footer -->
</template>

<script>
import axios from 'axios';
import { Url } from '~/config/url';

export default {
  data() {
    return {
      fullName: '',
      emailId: '',
      phoneNumber:'',
      status: '',
      address: '',
      ProfileImage: '',
    };
  },
  methods: {
    async fetchProfile() {
      const token = localStorage.getItem("authToken");

      const response = await axios.get(Url.fetchCustomerDetails, {
        headers: {
          "Authorization": "Bearer " + token
        },
      });
      console.log(48, response.data);

      this.profileType = response.data.data.c_verify;
            this.fullName = response.data.data.c_fullname;
            this.emailId = response.data.data.c_email;
            this.phoneNumber = response.data.data.c_mobile;
            this.status = response.data.data.c_status;
            this.address = response.data.data.c_address;
            this.ProfileImage = response.data.data.c_image;

    },
  },
  mounted() {
    this.fetchProfile();
  }
};
</script>