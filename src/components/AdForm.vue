<template>
  <div>
    <form novalidate class="md-layout md-alignment-top-center" @submit.prevent="submit">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Post your ad</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-alignment-top-left">
            <div class="md-layout-item md-size-100">
              <md-field>
                <label for="title">Title</label>
                <md-input name="title" id="title" type="text" v-model="form.title" required />
              </md-field>
            </div>
            <div class="md-layout-item md-size-100">
              <md-field>
                <label for="image-url">Image URL</label>
                <md-input
                  name="image-url"
                  id="image-url"
                  type="text"
                  v-model="form.imageUrl"
                  required
                />
              </md-field>
            </div>
            <div class="md-layout-item md-size-100">
              <md-field>
                <label for="description">Description</label>
                <md-textarea
                  name="description"
                  id="description"
                  md-autogrow
                  v-model="form.description"
                ></md-textarea>
              </md-field>
            </div>
            <div class="md-layout-item">
              <md-field>
                <label for="ad-type">Ad Type</label>
                <md-select v-model="form.adType" name="ad-type" id="ad-type" required>
                  <md-option value="adoption">Adoption</md-option>
                  <md-option value="sale">Sale</md-option>
                  <md-option value="breeding">Breeding</md-option>
                  <md-option value="wanted">Pet Wanted</md-option>
                  <md-option value="friendship">Friendship</md-option>
                </md-select>
              </md-field>
            </div>
            <div class="md-layout-item">
              <md-field>
                <label for="price">Price (BGN)</label>
                <md-input name="price" id="price" type="number" v-model="form.price" />
              </md-field>
            </div>
            <div class="md-layout-item md-size-100">
              <md-autocomplete
                v-model="form.breed"
                :md-options="breeds"
                name="breed"
                id="breed"
                required
              >
                <label for="breed">Breed</label>

                <template slot="md-autocomplete-item" slot-scope="{ item, term }">
                  <md-highlight-text :md-term="term">{{ item }}</md-highlight-text>
                </template>

                <template slot="md-autocomplete-empty">No result</template>
              </md-autocomplete>
            </div>
            <div class="md-layout-item">
              <md-field>
                <label for="age">Age (years)</label>
                <md-input name="age" id="age" type="number" v-model="form.age" required />
              </md-field>
            </div>
            <div class="md-layout-item">
              <md-field>
                <label for="gender">Gender</label>
                <md-select v-model="form.gender" name="gender" id="gender" required>
                  <md-option value="male">Male</md-option>
                  <md-option value="female">Female</md-option>
                </md-select>
              </md-field>
            </div>
            <div class="md-layout-item">
              <md-autocomplete
                v-model="form.location"
                :md-options="locations"
                name="location"
                id="location"
              >
                <label for="location">Location</label>

                <template slot="md-autocomplete-item" slot-scope="{ item, term }">
                  <md-highlight-text :md-term="term">{{ item }}</md-highlight-text>
                </template>

                <template slot="md-autocomplete-empty">No result</template>
              </md-autocomplete>
            </div>
            <div class="md-layout-item">
              <md-field>
                <label for="pedigree">Pedigree</label>
                <md-select v-model="form.pedigree" name="pedigree" id="pedigree">
                  <md-option value="true">Yes</md-option>
                  <md-option value="false">No</md-option>
                </md-select>
              </md-field>
            </div>
          </div>

          <!-- <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('lastName')">
                <label for="last-name">Last Name</label>
                <md-input name="last-name" id="last-name" autocomplete="family-name" v-model="form.lastName" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.lastName.required">The last name is required</span>
                <span class="md-error" v-else-if="!$v.form.lastName.minlength">Invalid last name</span>
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('gender')">
                <label for="gender">Gender</label>
                <md-select name="gender" id="gender" v-model="form.gender" md-dense :disabled="sending">
                  <md-option></md-option>
                  <md-option value="M">M</md-option>
                  <md-option value="F">F</md-option>
                </md-select>
                <span class="md-error">The gender is required</span>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('age')">
                <label for="age">Age</label>
                <md-input type="number" id="age" name="age" autocomplete="age" v-model="form.age" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.age.required">The age is required</span>
                <span class="md-error" v-else-if="!$v.form.age.maxlength">Invalid age</span>
              </md-field>
            </div>
          </div>

          <md-field :class="getValidationClass('email')">
            <label for="email">Email</label>
            <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email" :disabled="sending" />
            <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
            <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
          </md-field>-->
        </md-card-content>

        <md-card-actions>
          <md-button type="submit" class="md-raised md-primary">
            <md-icon>add</md-icon>Post Ad
          </md-button>
        </md-card-actions>
      </md-card>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: "",
        imageUrl: "",
        description: "",
        adType: "",
        price: null,
        breed: "",
        age: 0,
        gender: "",
        location: "",
        pedigree: false
      },
      breeds: [
        "(Any)",
        "husky",
        "keeshond",
        "kelpie",
        "komondor",
        "kuvasz",
        "labrador",
        "leonberg",
        "lhasa",
        "malamute",
        "malinois",
        "maltese"
      ],
      locations: [
        "(Any)",
        "Algeria",
        "Argentina",
        "Brazil",
        "Canada",
        "Italy",
        "Japan",
        "United Kingdom",
        "United States"
      ]
    };
  },
  methods: {
    submit() {
      console.log(this.form);
    }
  }
};
</script>

<style lang="scss" scoped>
.md-layout-item {
  margin-left: 8px;
  margin-right: 8px;
}
.md-button {
  width: 100%;
}
</style>