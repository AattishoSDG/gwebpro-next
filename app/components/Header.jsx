import HeaderNav from "./HeaderNav";
import apiService from "../apiServices/apiService"; // Import the service
const Header = async () => {
  //fetch common data
  const h_data = await apiService.getPagedata("acf/v1/options/");
  const header_data = h_data;

   //fetch menu data
  const m_data = await apiService.getPagedata("custom/v1/menu/header-menu/");
  const menu_data = m_data.items;
  return (
    <>
      <HeaderNav headerData={header_data} menuData= {menu_data} />
    </>
  );
};
export default Header;
