import { Link } from "react-router-dom";

export default function Header() {
  return(


<nav class="font-sans flex flex-col text-center sm:flex-row sm:text-left shrink-0 sm:justify-between px-6 bg-customBlue shadow sm:items-center w-full">
  <div class="mb-2 sm:mb-0 w-full md:w-auto">
    <Link to="/" class="text-2xl no-underline text-fontGray"><img src="src/assets/logo.png" class="" width="80%"/></Link>
  </div>
  <div class="flex justify-between w-[30%]">
    <a href="#" class="text-2xl no-underline text-fontGray ml-2 font-['Poppins']">Shows</a>
    <a href="#" class="text-2xl no-underline text-fontGray ml-2 font-['Poppins']">Palestras</a>
    <a href="#" class="text-2xl no-underline text-fontGray ml-2 font-['Poppins']">Filmes</a>
    <a href="#" class="text-2xl no-underline text-fontGray ml-2 font-['Poppins']">Seminários</a>

  </div>
  <div>
    <a href="#" class="text-2xl no-underline text-white mr-5 font-['Poppins'] rounded-lg border-2 border-white py-2.5 px-5">Login</a>
  </div>

</nav>
  )
}