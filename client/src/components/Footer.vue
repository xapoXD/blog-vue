<template>
  <footer class="cs-footer">






    <form>
      <div class="row">
        <div class="col-md-4 mb-3">
          <label for="validationDefault01">First name</label>
          <input type="text" class="form-control" id="validationDefault01" placeholder="First name" value="" required>
        </div>
        <div class="col-md-4 mb-3">
          <label for="validationDefault02">Last name</label>
          <input type="text" class="form-control" id="validationDefault02" placeholder="Last name" value="" required>
        </div>
      </div>

        <div class="col-md-4 mb-3">
          <label for="exampleInputEmail">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter email" required>
          <small id="emailHelp1" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>

      <div class="form-group">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required>
          <label class="form-check-label" for="invalidCheck2">
            Agree to terms and conditions
          </label>
        </div>
      </div>

      <button class="btn btn-primary" type="submit">Submit form</button>
    </form>



  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

.cs-footer {

  height: 40vh;
}
</style>
