import React, { useState } from "react";
import { toast } from "react-toastify";
import Button from "../../Components/Button/Button";
import DropDown from "../../Components/DropDown";
import Input from "../../Components/Input/Input";
import ModalSkeleton from "../../Components/ModalSkeleton/ModalSkeleton";
import { handleYearsOptions } from "../../Config/apiUrl";
import classes from "./AddEditCourseModal.module.css";
const statusOptions = [
  { label: "Active", value: "active" },
  { label: "Inactive", value: "inactive" },
];
const AddEditCourseModal = ({ data, show, setShow, onClick, apiCall }) => {
  const opt = handleYearsOptions();

  const [formData, setFormData] = useState({
    name: data ? data?.name : "",
    year: data ? opt?.find((e) => e?.value == data?.year) : null,
    status: data ? statusOptions?.find((e) => e?.value == data?.status) : null,
  });

  const handleValidation = () => {
    const params = {
      ...(data && { courseId: data?._id }),
      name: formData?.name,
      year: String(formData?.year?.value),
      ...(data && { status: String(formData?.status?.value) }),
    };
    for (const key in params) {
      if (!params[key]) {
        return toast.error(`Please Fill ${key.toUpperCase()} Field`);
      }
    }
    onClick(params, data ? true : false);
  };
  console.log(opt);
  return (
    <>
      <ModalSkeleton
        width={"700px"}
        header={data ? "Edit Course" : "Add Course"}
        show={show}
        setShow={setShow}
      >
        <div className={classes.pageMain}>
          <div className={classes.content}>
            <div>
              <Input
                setter={(e) => setFormData((prev) => ({ ...prev, name: e }))}
                value={formData?.name}
                label={"Name"}
                placeholder={"Name"}
              />
              <DropDown
                label={"Year"}
                option={[...opt]}
                value={formData?.year}
                setter={(e) => setFormData((prev) => ({ ...prev, year: e }))}
              />
              {data && (
                <DropDown
                  label={"Status"}
                  placeholder={"Select Status"}
                  option={statusOptions}
                  value={formData?.status}
                  setter={(e) =>
                    setFormData((prev) => ({ ...prev, status: e }))
                  }
                />
              )}
            </div>
            <div className={classes.btn}>
              <Button
                disabled={apiCall}
                onClick={() => handleValidation()}
                label={apiCall ? "Submitting..." : "Submit"}
              />
            </div>
          </div>
        </div>
      </ModalSkeleton>
    </>
  );
};

export default AddEditCourseModal;
