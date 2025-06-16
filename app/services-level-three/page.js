import apiService from "../apiServices/apiService";
import ServicesLevelThreeSections from "./ServicesLevelThreeSections";

export default async function ServicesLevelThree() {
  const data = await apiService.getPagedata("wp/v2/pages/8");
  const pageData = data.acf;
  return <ServicesLevelThreeSections pageData={pageData} />;
}
