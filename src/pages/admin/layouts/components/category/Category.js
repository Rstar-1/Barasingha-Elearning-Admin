import React, { useState } from "react";
import FeatherIcon from "feather-icons-react";
import AddCategory from "./components/AddCategory";
import EditCategory from "./components/EditCategory";

const Category = () => {
  const [categorysidebar, setcategorysidebar] = useState(false);
  const [editcategorysidebar, seteditcategorysidebar] = useState(false);
  return (
    <div className="bgwhite border-d mtpx9 cust-scroll p20">
      {categorysidebar ? (
        <div className="bg-glass2 fixed top-0 right-0 h-100 w-full z-99">
          <div className="bgwhite d-shadow sidebar-w h-100 absolute right-0 top-0">
            <div className="bgprimary p5">
              <div className="flex items-center justify-between gap-4 plpx7 prpx7">
                <p className="fsize15 textwhite mtpx4 mbpx4 cursor-pointer font-500">
                  Add Category
                </p>
                <FeatherIcon
                  icon="x"
                  className="textwhite cursor-pointer"
                  size={17}
                  onClick={() => setcategorysidebar(false)}
                />
              </div>
            </div>
            <div className="p10 side-scroll">
              <AddCategory />
            </div>
          </div>
        </div>
      ) : null}
      {editcategorysidebar ? (
        <div className="bg-glass2 fixed top-0 right-0 h-100 w-full z-99">
          <div className="bgwhite d-shadow sidebar-w h-100 absolute right-0 top-0">
            <div className="bgprimary p5">
              <div className="flex items-center justify-between gap-4 plpx7 prpx7">
                <p className="fsize15 textwhite mtpx4 mbpx4 cursor-pointer font-500">
                  Edit Category
                </p>
                <FeatherIcon
                  icon="x"
                  className="textwhite cursor-pointer"
                  size={17}
                  onClick={() => seteditcategorysidebar(false)}
                />
              </div>
            </div>
            <div className="p10 side-scroll">
              <EditCategory />
            </div>
          </div>
        </div>
      ) : null}
      <div className="flex justify-between items-center w-full">
        <div>
          <h6 className="fsize20 textprimary mtpx1 mbpx1 font-600">Category</h6>
          <p className="mtpx2 textgray fsize13">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to content.
          </p>
        </div>
        <div>
          <button
            onClick={() => setcategorysidebar(true)}
            className="border-0 cursor-pointer font-500 textwhite rounded-5 ptpx9 pbpx9 plpx25 prpx25 fsize14 bgprimary"
          >
            Add Category
          </button>
        </div>
      </div>

      <div className="mtpx18 rounded-10 border-ec p20">
        <div className="mtpx5 mbpx15 flex gap-12 items-center">
          <div className="w-60">
            <div className="relative">
              <input
                className="w-full h-input fsize14 rounded-5 plpx10 border-ec"
                placeholder="Search"
              />
              <div className="absolute top-0 right-0 mtpx9 mrpx2">
                <FeatherIcon
                  icon="search"
                  className="textgray cursor-pointer"
                  size={20}
                />
              </div>
            </div>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th className="fsize13 w-10 textwhite font-300">
                <p>ID</p>
              </th>
              <th className="fsize13 w-50 textwhite font-300">
                <p>Category Name</p>
              </th>
              <th className="fsize13 w-30 textwhite font-300">
                <p>Created Date</p>
              </th>
              <th className="fsize13 w-10 textwhite font-300">
                <p>Actions</p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="fsize13 w-10 textforth">
                <p>1</p>
              </td>
              <td className="fsize13 w-50 textforth">
                <p>Lorem</p>
              </td>
              <td className="fsize13 w-30 textforth">
                <p>12/12/2023</p>
              </td>
              <td className="fsize13 w-10 textforth plpx15">
                <FeatherIcon
                  icon="edit"
                  className="textgray cursor-pointer"
                  onClick={() => seteditcategorysidebar(true)}
                  size={16}
                />
              </td>
            </tr>
            <tr>
              <td className="fsize13 w-10 textforth">
                <p>2</p>
              </td>
              <td className="fsize13 w-50 textforth">
                <p>Lorem</p>
              </td>
              <td className="fsize13 w-30 textforth">
                <p>12/12/2023</p>
              </td>
              <td className="fsize13 w-10 textforth plpx15">
                <FeatherIcon
                  icon="edit"
                  className="textgray cursor-pointer"
                  onClick={() => setcategorysidebar(true)}
                  size={16}
                />
              </td>
            </tr>
            <tr>
              <td className="fsize13 w-10 textforth">
                <p>3</p>
              </td>
              <td className="fsize13 w-50 textforth">
                <p>Lorem</p>
              </td>
              <td className="fsize13 w-30 textforth">
                <p>12/12/2023</p>
              </td>
              <td className="fsize13 w-10 textforth plpx15">
                <FeatherIcon
                  icon="edit"
                  className="textgray cursor-pointer"
                  onClick={() => setcategorysidebar(true)}
                  size={16}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Category;
