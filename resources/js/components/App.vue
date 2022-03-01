<template>
  <div id="main">
    <nav class="navbar navbar-light bg-light fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Mailer S.A</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Detalles de Usuario</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <div class="card">
              <div class="card-header">
                Jhonny
              </div>
              <div class="card-body">
                <blockquote class="blockquote mb-0">
                  <footer class="blockquote-footer">
                    <p>nombres: jhonny jose</p>
                    <p>apellidos: perez martinez</p>
                    <p>correo: jhonnyjose1998@gmail.com</p>
                  </footer>
                </blockquote>
              </div>
            </div>
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item text-center">
                <a class="btn btn-warning text-white" href="#">Cerrar Sesion</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>