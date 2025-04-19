<template>
  <div class="site__body">
    <div class="about">
      <div class="about__body">
        <div class="about__image">
          <div class="about__image-bg" style="background-image: url('/images/about-1903x1903.jpg');"></div>
          <div class="decor about__image-decor decor--type--bottom">
            <div class="decor__body">
              <div class="decor__start"></div>
              <div class="decor__end"></div>
              <div class="decor__center"></div>
            </div>
          </div>
        </div>
        <div class="about__card">
          <div class="about__card-title">About Us</div>
          <div class="about__card-text">RedParts is an international company with 30 years of history
            selling spare parts for cars, trucks and motorcycles. During our work we managed to create a
            unique service for the sale and delivery of spare parts around the world.</div>
          <div class="about__card-author">Ryan Ford, CEO Advance Engineerings</div>
          <!-- <div class="about__card-signature"><img src="/images/signature.jpg" width="160" height="55" alt=""></div> -->
        </div>
        <div class="about__indicators">
          <div class="about__indicators-body">
            <div class="about__indicators-item">
              <div class="about__indicators-item-value">350</div>
              <div class="about__indicators-item-title">Stores around the world</div>
            </div>
            <div class="about__indicators-item">
              <div class="about__indicators-item-value">80 000</div>
              <div class="about__indicators-item-title">Original auto parts</div>
            </div>
            <div class="about__indicators-item">
              <div class="about__indicators-item-value">5 000</div>
              <div class="about__indicators-item-title">Satisfied customers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="block-space block-space--layout--divider-xl"></div>

    <!-- Board of Directors start -->
    <div class="block block-teammates">
      <div class="container container--max--xl">
        <div class="block-teammates__title">BOARD OF DIRECTORS'S</div>
        <div class="block-teammates__subtitle">Meet this is our professional team.</div>

        <div class="d-flex" style="justify-content: center; gap: 12px;">
          <div class="card text-center" v-for="(profile, index) in boardOfDirectors" :key="index">
            <img class="card-img-top mx-auto" :src="profile.imageSrc" alt="Profile image"
              style="width: 200px; height: 180px; object-fit: cover; border-radius: 50%; margin-top: 20px;" />
            <div class="card-body">
              <h5 class="card-title">{{ profile.name }}</h5>
              <p class="card-text">{{ profile.position }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="block-space block-space--layout--divider-xl"></div>
    <!-- Board of Directors end -->

    <!-- ASSISTANT MANAGER START -->
    <div class="block block-teammates">
      <div class="container container--max--xl">
        <div class="block-teammates__title">ASSISTANT MANAGER'S</div>
        <div class="block-teammates__subtitle">Meet this is our professional team.</div>

        <div class="d-flex" style="justify-content: center; gap: 12px;">
          <div class="card text-center" v-for="(profile, index) in assistantManager" :key="index">
            <img class="card-img-top mx-auto" :src="profile.imageSrc" alt="Profile image"
              style="width: 200px; height: 180px; object-fit: cover; border-radius: 50%; margin-top: 20px;" />
            <div class="card-body">
              <h5 class="card-title">{{ profile.name }}</h5>
              <p class="card-text">{{ profile.position }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="block-space block-space--layout--divider-xl"></div>
    <!-- ASSISTANT MANAGER END -->

    <!-- ACCOUNTING AND FINANCE START -->
    <div class="block block-teammates">
      <div class="container container--max--xl">
        <div class="block-teammates__title">ACCOUNTING AND FINANCE TEAM'S</div>
        <div class="block-teammates__subtitle">Meet this is our professional team.</div>

        <div class="d-flex" style="justify-content: center; gap: 12px;">
          <div class="card text-center" v-for="(profile, index) in accountingTeam" :key="index">
            <img class="card-img-top mx-auto" :src="profile.imageSrc" alt="Profile image"
              style="width: 200px; height: 180px; object-fit: cover; border-radius: 50%; margin-top: 20px;" />
            <div class="card-body">
              <h5 class="card-title">{{ profile.name }}</h5>
              <p class="card-text">{{ profile.position }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="block-space block-space--layout--divider-xl"></div>
    <!-- ACCOUNTING AND FINANCE END -->

    <!-- QUALITY CONTROL TEAM START -->
    <div class="block block-teammates">
      <div class="container container--max--xl">
        <div class="block-teammates__title">QUALITY CONTROL TEAM'S</div>
        <div class="block-teammates__subtitle">Meet this is our professional team.</div>

        <div class="d-flex" style="justify-content: center; gap: 12px;">
          <div class="card text-center" v-for="(profile, index) in qualityControl" :key="index">
            <img class="card-img-top mx-auto" :src="profile.imageSrc" alt="Profile image"
              style="width: 200px; height: 180px; object-fit: cover; border-radius: 50%; margin-top: 20px;" />
            <div class="card-body">
              <h5 class="card-title">{{ profile.name }}</h5>
              <p class="card-text">{{ profile.position }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="block-space block-space--layout--divider-xl"></div>
    <!-- QUALITY CONTROL TEAM END -->


    <!-- SALES HADE TEAM START -->
    <div class="block block-teammates">
      <div class="container container--max--xl">
        <div class="block-teammates__title">SALES HADE TEAM'S</div>
        <div class="block-teammates__subtitle">Meet this is our professional team.</div>

        <div class="d-flex" style="justify-content: center; gap: 12px;">
          <div class="card text-center" v-for="(profile, index) in salesHade" :key="index">
            <img class="card-img-top mx-auto" :src="profile.imageSrc" alt="Profile image"
              style="width: 200px; height: 180px; object-fit: cover; border-radius: 50%; margin-top: 20px;" />
            <div class="card-body">
              <h5 class="card-title">{{ profile.name }}</h5>
              <p class="card-text">{{ profile.position }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="block-space block-space--layout--divider-xl"></div>
    <!-- SALES HADE TEAM END -->

    <!-- SALES MANAGER TEAM START -->
    <div class="block block-teammates">
      <div class="container container--max--xl">
        <div class="block-teammates__title">SALES MANAGER TEAM'S</div>
        <div class="block-teammates__subtitle">Meet this is our professional team.</div>

        <div class="d-flex" style="justify-content: center; gap: 12px;">
          <div class="card text-center" v-for="(profile, index) in salesManager" :key="index">
            <img class="card-img-top mx-auto" :src="profile.imageSrc" alt="Profile image"
              style="width: 200px; height: 180px; object-fit: cover; border-radius: 50%; margin-top: 20px;" />
            <div class="card-body">
              <h5 class="card-title">{{ profile.name }}</h5>
              <p class="card-text">{{ profile.position }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="block-space block-space--layout--divider-xl"></div>
    <!-- SALES MANAGER TEAM END -->


    <!-- MARKETING & RESEARCH AND DEVLOPMENT TEAM START -->
    <div class="block block-teammates">
      <div class="container container--max--xl">
        <div class="block-teammates__title">MARKETING & RESEARCH AND DEVLOPMENT TEAM'S</div>
        <div class="block-teammates__subtitle">Meet this is our professional team.</div>

        <div class="d-flex" style="justify-content: center; gap: 12px;">
          <div class="card text-center" v-for="(profile, index) in mRDevelopment" :key="index">
            <img class="card-img-top mx-auto" :src="profile.imageSrc" alt="Profile image"
              style="width: 200px; height: 180px; object-fit: cover; border-radius: 50%; margin-top: 20px;" />
            <div class="card-body">
              <h5 class="card-title">{{ profile.name }}</h5>
              <p class="card-text">{{ profile.position }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="block-space block-space--layout--divider-xl"></div>
    <!-- MARKETING & RESEARCH AND DEVLOPMENT TEAM END -->


    <!-- TECHNICAL TEAM TEAM START -->
    <div class="block block-teammates">
      <div class="container container--max--xl">
        <div class="block-teammates__title">TECHNICAL TEAM TEAM'S</div>
        <div class="block-teammates__subtitle">Meet this is our professional team.</div>

        <div class="d-flex" style="justify-content: center; gap: 12px;">
          <div class="card text-center" v-for="(profile, index) in technicalTeam" :key="index">
            <img class="card-img-top mx-auto" :src="profile.imageSrc" alt="Profile image"
              style="width: 200px; height: 180px; object-fit: cover; border-radius: 50%; margin-top: 20px;" />
            <div class="card-body">
              <h5 class="card-title">{{ profile.name }}</h5>
              <p class="card-text">{{ profile.position }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="block-space block-space--layout--divider-xl"></div>
    <!-- TECHNICAL TEAM TEAM END -->

    <!-- PRODUCTION AND MANUFACTURING TEAM START -->
    <div class="block block-teammates">
      <div class="container container--max--xl">
        <div class="block-teammates__title">PRODUCTION AND MANUFACTURING TEAM'S</div>
        <div class="block-teammates__subtitle">Meet this is our professional team.</div>

        <div class="row" style="justify-content: center; gap: 12px;">
          <div class="card text-center" v-for="(profile, index) in pMTeam" :key="index">
            <img class="card-img-top mx-auto" :src="profile.imageSrc" alt="Profile image"
              style="width: 200px; height: 180px; object-fit: cover; border-radius: 50%; margin-top: 20px;" />
            <div class="card-body">
              <h5 class="card-title">{{ profile.name }}</h5>
              <p class="card-text">{{ profile.position }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="block-space block-space--layout--divider-xl"></div>
    <!-- PRODUCTION AND MANUFACTURING TEAM END -->

    <div class="block block-teammates">
      <div class="container container--max--xl">
        <div class="d-flex" style="justify-content: center; gap: 12px;">
          <div class="card text-center" v-for="(profile, index) in profiles" :key="index">
            <img class="card-img-top mx-auto" :src="profile.imageSrc" alt="Profile image"
              style="width: 200px; height: 180px; object-fit: cover; border-radius: 50%; margin-top: 20px;" />
            <div class="card-body">
              <h5 class="card-title">{{ profile.name }}</h5>
              <p class="card-text">{{ profile.position }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="block-space block-space--layout--divider-xl"></div>

  </div>
</template>


<script>
export default {

  data() {
    return {
      boardOfDirectors: [
        { name: 'MR. J.P. KOUSHAL', position: 'BOARD OF DIRECTORS ', imageSrc: 'https://png.pngtree.com/png-vector/20221114/ourmid/pngtree-man-illustration-sign-symbol-vector-png-image_34644414.png' },
        { name: 'MR. OM KOUSHAL', position: 'BOARD OF DIRECTORS', imageSrc: 'https://png.pngtree.com/png-vector/20221114/ourmid/pngtree-man-illustration-sign-symbol-vector-png-image_34644414.png' },
        { name: 'MR. GM KOUSHAL', position: 'BOARD OF DIRECTORS', imageSrc: 'https://png.pngtree.com/png-vector/20221114/ourmid/pngtree-man-illustration-sign-symbol-vector-png-image_34644414.png' },
        { name: 'MR. LAXMAN KOUSHAL', position: 'BOARD OF DIRECTORS', imageSrc: 'https://png.pngtree.com/png-vector/20221114/ourmid/pngtree-man-illustration-sign-symbol-vector-png-image_34644414.png' },
      ],

      assistantManager: [
        { name: 'MR. H.P SHARMA', position: 'ASSISTANT MANAGER ', imageSrc: 'https://png.pngtree.com/png-vector/20221114/ourmid/pngtree-man-illustration-sign-symbol-vector-png-image_34644414.png' },
        { name: 'MR. M.T THAKUR', position: 'ASSISTANT MANAGER', imageSrc: 'https://png.pngtree.com/png-vector/20221114/ourmid/pngtree-man-illustration-sign-symbol-vector-png-image_34644414.png' },
        { name: 'MR. T.K MATHUR', position: 'ASSISTANT MANAGER', imageSrc: 'https://png.pngtree.com/png-vector/20221114/ourmid/pngtree-man-illustration-sign-symbol-vector-png-image_34644414.png' },
        { name: 'MR. P.D KUMAR', position: 'ASSISTANT MANAGER', imageSrc: 'https://png.pngtree.com/png-vector/20221114/ourmid/pngtree-man-illustration-sign-symbol-vector-png-image_34644414.png' },
      ],


      accountingTeam: [
        { name: 'MR. MILLAN MEHTO', position: 'accountingTeam', imageSrc: 'https://png.pngtree.com/png-vector/20221114/ourmid/pngtree-man-illustration-sign-symbol-vector-png-image_34644414.png' },
        { name: 'MR. RAVI KUMAR', position: 'accountingTeam', imageSrc: 'https://png.pngtree.com/png-vector/20221114/ourmid/pngtree-man-illustration-sign-symbol-vector-png-image_34644414.png' },
      ],

      qualityControl: [
        { name: 'MR. MAHESH', position: 'QUALITY CONTROL TEAM', imageSrc: 'https://png.pngtree.com/png-vector/20221114/ourmid/pngtree-man-illustration-sign-symbol-vector-png-image_34644414.png' },
        { name: 'MR. NITIN', position: 'QUALITY CONTROL TEAM', imageSrc: 'https://png.pngtree.com/png-vector/20221114/ourmid/pngtree-man-illustration-sign-symbol-vector-png-image_34644414.png' },
      ],

      salesHade: [
        { name: 'MR. CHANDAN KUMAR GUPTA', position: 'SALES HADE', imageSrc: 'https://png.pngtree.com/png-vector/20221114/ourmid/pngtree-man-illustration-sign-symbol-vector-png-image_34644414.png' },
      ],

      salesManager: [
        { name: 'MR. RAMAN', position: 'SALES MANAGER', imageSrc: 'https://png.pngtree.com/png-vector/20221114/ourmid/pngtree-man-illustration-sign-symbol-vector-png-image_34644414.png' },
        { name: 'MR. MR. VIVEK', position: 'SALES MANAGER', imageSrc: 'https://png.pngtree.com/png-vector/20221114/ourmid/pngtree-man-illustration-sign-symbol-vector-png-image_34644414.png' },
      ],

      mRDevelopment: [
        { name: 'MR. JITENDRA', position: 'MARKETING & RESEARCH AND DEVLOPMENT', imageSrc: 'https://png.pngtree.com/png-vector/20221114/ourmid/pngtree-man-illustration-sign-symbol-vector-png-image_34644414.png' },
        { name: 'MR. GOVIND', position: 'MARKETING & RESEARCH AND DEVLOPMENT', imageSrc: 'https://png.pngtree.com/png-vector/20221114/ourmid/pngtree-man-illustration-sign-symbol-vector-png-image_34644414.png' },
        { name: 'MR. VIPUL', position: 'MARKETING & RESEARCH AND DEVLOPMENT', imageSrc: 'https://png.pngtree.com/png-vector/20221114/ourmid/pngtree-man-illustration-sign-symbol-vector-png-image_34644414.png' },
        { name: 'MR. ABHISHEK', position: 'MARKETING & RESEARCH AND DEVLOPMENT', imageSrc: 'https://png.pngtree.com/png-vector/20221114/ourmid/pngtree-man-illustration-sign-symbol-vector-png-image_34644414.png' },
        { name: 'MR. ROHIT', position: 'MARKETING & RESEARCH AND DEVLOPMENT', imageSrc: 'https://png.pngtree.com/png-vector/20221114/ourmid/pngtree-man-illustration-sign-symbol-vector-png-image_34644414.png' },
      ],

      technicalTeam: [
        { name: 'MR. JITESH KUMAR', position: 'TECHNICAL TEAM', imageSrc: 'https://png.pngtree.com/png-vector/20221114/ourmid/pngtree-man-illustration-sign-symbol-vector-png-image_34644414.png' },
        { name: 'MR. AVINASH KUMAR', position: 'TECHNICAL TEAM', imageSrc: 'https://png.pngtree.com/png-vector/20221114/ourmid/pngtree-man-illustration-sign-symbol-vector-png-image_34644414.png' },
        { name: 'MR. BILKESH MATHUR', position: 'TECHNICAL TEAM', imageSrc: 'https://png.pngtree.com/png-vector/20221114/ourmid/pngtree-man-illustration-sign-symbol-vector-png-image_34644414.png' },
        { name: 'MR. ABHINAV KUMAR', position: 'TECHNICAL TEAM', imageSrc: 'https://png.pngtree.com/png-vector/20221114/ourmid/pngtree-man-illustration-sign-symbol-vector-png-image_34644414.png' },
      ],

      pMTeam: [
        { name: 'MR. DAKSH DUBY', position: 'PRODUCTION AND MANUFACTURING TEAM', imageSrc: 'https://png.pngtree.com/png-vector/20221114/ourmid/pngtree-man-illustration-sign-symbol-vector-png-image_34644414.png' },
        { name: 'MR. AADITY MISHRA', position: 'PRODUCTION AND MANUFACTURING TEAM', imageSrc: 'https://png.pngtree.com/png-vector/20221114/ourmid/pngtree-man-illustration-sign-symbol-vector-png-image_34644414.png' },
        { name: 'MR. RONAK SAHU', position: 'PRODUCTION AND MANUFACTURING TEAM', imageSrc: 'https://png.pngtree.com/png-vector/20221114/ourmid/pngtree-man-illustration-sign-symbol-vector-png-image_34644414.png' },
        { name: 'MR. GANESH SHARMA', position: 'PRODUCTION AND MANUFACTURING TEAM', imageSrc: 'https://png.pngtree.com/png-vector/20221114/ourmid/pngtree-man-illustration-sign-symbol-vector-png-image_34644414.png' },
        { name: 'MR. JANAK SINGH', position: 'PRODUCTION AND MANUFACTURING TEAM', imageSrc: 'https://png.pngtree.com/png-vector/20221114/ourmid/pngtree-man-illustration-sign-symbol-vector-png-image_34644414.png' },

        { name: 'MR. VARUN SHUKLA', position: 'PRODUCTION AND MANUFACTURING TEAM', imageSrc: 'https://png.pngtree.com/png-vector/20221114/ourmid/pngtree-man-illustration-sign-symbol-vector-png-image_34644414.png' },
        { name: 'MR. SIDDHARTH KUMAR', position: 'PRODUCTION AND MANUFACTURING TEAM', imageSrc: 'https://png.pngtree.com/png-vector/20221114/ourmid/pngtree-man-illustration-sign-symbol-vector-png-image_34644414.png' },
        { name: 'MR. PRINCE BAKSHI', position: 'PRODUCTION AND MANUFACTURING TEAM', imageSrc: 'https://png.pngtree.com/png-vector/20221114/ourmid/pngtree-man-illustration-sign-symbol-vector-png-image_34644414.png' },
        { name: 'MR. YOGESH AGARWAL', position: 'PRODUCTION AND MANUFACTURING TEAM', imageSrc: 'https://png.pngtree.com/png-vector/20221114/ourmid/pngtree-man-illustration-sign-symbol-vector-png-image_34644414.png' },
        { name: 'MR. TANISH GUPTA', position: 'PRODUCTION AND MANUFACTURING TEAM', imageSrc: 'https://png.pngtree.com/png-vector/20221114/ourmid/pngtree-man-illustration-sign-symbol-vector-png-image_34644414.png' },

        { name: 'MR. BANTI KUMAR', position: 'PRODUCTION AND MANUFACTURING TEAM', imageSrc: 'https://png.pngtree.com/png-vector/20221114/ourmid/pngtree-man-illustration-sign-symbol-vector-png-image_34644414.png' },
        { name: 'MR. TANMAY JOSHI', position: 'PRODUCTION AND MANUFACTURING TEAM', imageSrc: 'https://png.pngtree.com/png-vector/20221114/ourmid/pngtree-man-illustration-sign-symbol-vector-png-image_34644414.png' },
        { name: 'MR. UJJWAL PATEL', position: 'PRODUCTION AND MANUFACTURING TEAM', imageSrc: 'https://png.pngtree.com/png-vector/20221114/ourmid/pngtree-man-illustration-sign-symbol-vector-png-image_34644414.png' },
        { name: 'MR. PAWAN KUMAR', position: 'PRODUCTION AND MANUFACTURING TEAM', imageSrc: 'https://png.pngtree.com/png-vector/20221114/ourmid/pngtree-man-illustration-sign-symbol-vector-png-image_34644414.png' },
        { name: 'MR. HARDIK SHRIVASTAV', position: 'PRODUCTION AND MANUFACTURING TEAM', imageSrc: 'https://png.pngtree.com/png-vector/20221114/ourmid/pngtree-man-illustration-sign-symbol-vector-png-image_34644414.png' },

      ],

    };
  },





  // props: {
  //   name: {
  //     type: String,
  //     default: "Michael Russo",
  //   },
  //   position: {
  //     type: String,
  //     default: "Chief Executive Officer",
  //   },
  //   imageSrc: {
  //     type: String,
  //     default: "https://png.pngtree.com/png-vector/20221114/ourmid/pngtree-man-illustration-sign-symbol-vector-png-image_34644414.png", // Replace with actual image URL
  //   },
  // },
};
</script>

<style scoped>
.card {
  width: 14rem;
  box-shadow: 0 4px 8px rgba(184, 79, 79, 0.1);
  border-radius: 6px;
  overflow: hidden;
}

.card-title {
  font-weight: bold;
  font-size: 1.2rem;
}

.card-text {
  color: gray;
  font-size: 0.9rem;
}
</style>
