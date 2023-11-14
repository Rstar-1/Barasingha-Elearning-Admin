import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

const AddElearning = () => {
   const history = useNavigate("");
  const [inpval, setInpval] = useState({
    img: "",
    title: "",
    category: "",
    desc: "",
  });
  const setVal = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };
  const addUserdata = async (e) => {
    e.preventDefault();
    const { img, title, category, desc } = inpval;

    const data = await fetch("http://localhost:8000/api/elearnregister", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        img,
        title,
        category,
        desc,
      }),
    });
    const res = await data.json();
    if (res.status === 201) {
      history("/add-blogs");
      alert("Registration Successfully done 😃!");
      setInpval({
        ...inpval,
        img: "",
        title: "",
        category: "",
        desc: "",
      });
    }
  };
  return (
    <div className="bgwhite border-d mtpx9 cust-scroll p20">
      <h6 className="fsize20 textprimary mtpx1 mbpx1 font-600">Add Elearning</h6>
      <p className="mtpx2 textgray fsize13">
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to content.
      </p>
      <div className="mtpx18">
          <div className="grid-cols-1 w-60 gap-12">
            <div className="w-full">
              <label className="fsize13 textforth">Image</label>
              <div>
                <input
                  className="side-input mtpx5 h-input fsize13 rounded-5 plpx10 border-ec"
                  placeholder="Enter"
                  type="text"
                  value={inpval.img}
                  onChange={setVal}
                  name="img"
                  id="img"
                />
              </div>
            </div>
            <div className="w-full">
              <label className="fsize13 textforth">Title</label>
              <div>
                <input
                  className="side-input mtpx5 h-input fsize13 rounded-5 plpx10 border-ec"
                  placeholder="Enter Title"
                  type="text"
                  value={inpval.title}
                  onChange={setVal}
                  name="title"
                  id="title"
                />
              </div>
            </div>
            <div className="w-full">
              <label className="fsize13 textforth">Category</label>
              <div>
                <input
                  className="side-input mtpx5 h-input fsize13 rounded-5 plpx10 border-ec"
                  placeholder="Enter Category"
                  type="text"
                  value={inpval.category}
                  onChange={setVal}
                  name="category"
                  id="category"
                />
              </div>
            </div>
            <div className="w-full">
              <label className="fsize13 textforth">Description</label>
              <div>
                <textarea
                  className="textarea-input mtpx5 h-input fsize13 rounded-5 p10 border-ec"
                  placeholder="Enter Description"
                  type="text"
                  value={inpval.desc}
                  onChange={setVal}
                  name="desc"
                  id="desc"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="mtpx15">
            <button
              onClick={addUserdata}
              className="border-0 cursor-pointer font-500 textwhite rounded-5 ptpx6 pbpx6 plpx25 prpx25 fsize13 bgprimary"
            >
              Submit
            </button>
          </div>
      </div>
    </div>
  );
};

export default AddElearning;
