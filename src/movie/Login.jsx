import "./Login.css";

export default function Login() {
  return (
    <div className="body">
      <div className="container-login ">
        <div className="logo" />
        <div className="masuk">
          <p className="p-selamat">Selamat datang Kembali</p>
          <form action="">
            <div className="container-username">
              <label htmlFor="username" name="username" className="l-username">
                Username
              </label>
              <input type="text" name="username" className="i-username" placeholder="Masukkan Username" />
            </div>
            <div className="container-password">
              <label htmlFor="password" name="password" className="l-password">
                Password
              </label>
              <input type="password" name="password" className="i-password" placeholder="Masukkan Kata Sandi" />
              <div className="mata">
                <img src="assets/img/mata.png" alt="" />
              </div>
              <div className="belum-punya-akun">
                <p htmlFor="" className="p-akun">
                  Belum punya akun ?
                </p>
                <a href="Register.html" className="a-daftar">
                  <p>Daftar</p>
                </a>
              </div>
              <div className="lupa-sandi">
                <a href="" className="a-sandi">
                  <p>Lupa Kata Sandi ?</p>
                </a>
              </div>
              <div className="container-masuk">
                <div>
                  <button type="submit" name="submit" className="button-masuk">
                    Masuk
                  </button>
                </div>
                <div className="center">
                  <p>Atau</p>
                </div>
                <div>
                  <button data-unify="Button" type="button" id="googleLogin57228" data-testid="google-login" className="css-rce0rb-unf-btn eg8apji0">
                    <span>Masuk dengan Google</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
