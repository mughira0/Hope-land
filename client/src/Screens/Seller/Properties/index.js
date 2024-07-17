import React, { useState, useEffect } from 'react';
import classes from './index.module.css';
import { FaMapLocationDot } from "react-icons/fa6";
import { BiSolidSelectMultiple } from "react-icons/bi";
import Input from '../../../Components/Input/Input';
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import DropDown from '../../../Components/DropDown/index'
import { FaMap } from "react-icons/fa";
import { LiaUserTagSolid } from "react-icons/lia";
import { TbResize } from "react-icons/tb";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import ToggleButton from '../../../Components/ToggleButton/index';
import { HiMiniDocumentCheck } from "react-icons/hi2";
import { HiMiniClipboardDocumentCheck, HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { CiImageOn } from "react-icons/ci";
import { MdCall , MdOutlineAddHomeWork } from "react-icons/md";
import { BiImageAdd } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
import { TfiEmail } from "react-icons/tfi";
import Button from '../../../Components/Button/Button'
import { FaPlus } from "react-icons/fa6";
import { LuBedSingle,  LuBath } from "react-icons/lu";
import { AiOutlineHome } from "react-icons/ai";

function Properties() {

  const [form, setForm] = useState({
    pr_purpose: "Sell",
    pr_type: {category:'Home',type:[]},
    pr_area: {length:0,measure:'Marla',location:'',city:''},
    pr_pay:0,
    pr_installment: false,
    pr_installment_plan:{number_of_installments:0,advance_amount:0,monthly_installments:0},
    pr_possession: false,
    images: [],
    pr_description: {title:'',description:''},
    user_info:{email:'',phoneNumber:'',number_of_phonenumber:0,landlineNumber:0},
    pr_items : {bedrooms:'',number_of_bedrooms:0,washrooms:0},
    additional_information : ''
  });


  const image_descrip = [ { text: 'Ads with pictures get 5x more views.' },  { text: 'Upload good quality pictures with proper lighting.' },{ text: 'Double click to set cover image.' } ]
  const cities = [ { value: "karachi", label: "Karachi" }, { value: "lahore", label: "Lahore" }, { value: "faisalabad", label: "Faisalabad" }, { value: "rawalpindi", label: "Rawalpindi" },{ value: "multan", label: "Multan" }];
  const payment = [ { value: "USD", label: "USD" }, { value: "PKR", label: "PKR" } ]
  const d = [ { value: "Marla", label: "Marla" }, { value: "Sq. Ft.", label: "Sq. Ft." }, { value: "Sq. M.", label: "Sq. M." }, { value: "Sq. Yd.", label: "Sq. Yd." }, { value: "Kanal", label: "Kanal" }]
  const pr_type = [ {
      parent: 'Home',
      children: ['House', 'Flat', 'Upper Portion', 'Lower Portion', 'Farm House', 'Room', 'Pent House']
    },
    {
      parent: 'Plots',
      children: ['Residential Plot', 'Commercial Plot', 'Agriculture Land', 'Industrial Land', 'Plot File', 'Plot Form']
    },
    {
      parent: 'Commercial',
      children: ['Office', 'Shop', 'Warehouse', 'Factory', 'Building', 'Other']
    }
  ]

  const selected_category = pr_type.find((ele) => ele.parent === form.pr_type['category']);
  const setPurpose = (purpose) => setForm(prevForm => ({ ...prevForm, pr_purpose: purpose }));
  const setType = (type) => setForm(prevForm => ({ ...prevForm, pr_type: { ...prevForm.pr_type, type:type } }));
  const setArea = (key, value) => setForm(prevForm => ({ ...prevForm, pr_area: { ...prevForm.pr_area, [key]: value } }));
  const handleUserInfo = (key,value) => setForm(prev=>({...prev, user_info:{...prev.user_info,[key]:value}}))
  const handleItems = (key,value)=> setForm(prev => ({...prev,pr_items:{...prev.pr_items,[key]:value}}))
  const handleNumbers = () => { return form.user_info['number_of_phonenumber'].length > 1 ? true : false }
  const handleInstallments = (key,value)=> setForm(prev => ({ ...prev, pr_installment_plan:{ ...prev.pr_installment_plan, [key]:value}}))
  const handleDescription = (key,value) => setForm(prev=> ({...prev, pr_description:{...prev.pr_description,[key]:value}}))

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    setForm((prev)=>({
      ...prev,
      images:[
        ...prev,
        ...files
      ]

    }))
  }


  useEffect(() => {
    const selected_category = pr_type.find((ele) => ele.parent === form.pr_type['category']);
    if (selected_category) {
      setForm((prev) => ({
        ...prev,
        pr_type: {
          ...prev.pr_type,
          type: selected_category.children[0]
        }
      }));
    }
    console.log(form.pr_type)
  }, [form.pr_type['category']]);


  const handleForm = ()=>{
  }



  useEffect(() => {
    console.log(form.images);
  }, [form.images]);

  return (
    <div className={classes.properties}>
      {/* First Information */}

      <div className={classes.purpose}>
        <div className={classes.left_side}>
          <div className={classes.ls_icon}><FaMapLocationDot size={25} /></div>
          <h6>Location And Purpose</h6>
        </div>
        <div className={classes.right_side}>

          {/* Handle the Purpose of Posting like Selling or Renting */}


          <div className={classes.r1} style={{ height: '15%' }}>
            <div className={classes.icon} style={{ height: '30%' }}><BiSolidSelectMultiple size={15} style={{ backgroundColor: 'transparent' }} /></div>
            <div className={classes.text}>
              <h6>Select Purpose</h6>
              <div className={classes.choices}>
                <Input
                  type={'radio'}
                  label={'Sell'}
                  setter={setPurpose}
                  prop_type={form.pr_purpose}
                />
                <Input
                  type={'radio'}
                  label={'Rent'}
                  setter={setPurpose}
                  prop_type={form.pr_purpose}
                />
              </div>
            </div>
          </div>

          {/* Manage the display and flow of Proprty Type */}


          <div className={classes.r1} style={{ height: '30%' }}>
            <div className={classes.icon} style={{ height: '17%' }}><HiOutlineBuildingOffice2 size={15} style={{ backgroundColor: 'transparent' }} /></div>
            <div className={classes.text}>
              <h6>Select Property Type</h6>
              <div className={classes.btn_cmp}>
                {pr_type.map((ele, index) => (
                  <div className={classes.property_btn} onClick={() => setForm((prev)=> ({ ...prev,pr_type:{...prev.pr_type,category:ele.parent}}))} style={ele.parent === form.pr_type['category'] ? { color: 'blue', borderBottomWidth: '2px', borderBottomStyle: 'solid', borderBottomColor: 'blue' } : {}}>{ele.parent}</div>
                ))}
              </div>
              <div className={classes.choices}>
                {selected_category?.children.map((ele, index) => (
                  <Input type={'radio'} label={ele} setter={setType} prop_type={form.pr_type['type']} value={'pr_type'}/>
                ))}
              </div>
            </div>
          </div>

          {/* Choosing City  */}

          <div className={classes.r1} style={{ height: '15%' }}>
            <div className={classes.icon} style={{ height: '30%' }}><IoLocationOutline size={15} style={{ backgroundColor: 'transparent' }} /></div>
            <div className={classes.text}>
              <h6>City</h6>
              <DropDown placeholder={'Select City'} option={cities} />
            </div>
          </div>
          <div className={classes.r1} style={{ height: '15%' }}>
            <div className={classes.icon} style={{ height: '30%' }}><FaMap size={15} style={{ backgroundColor: 'transparent' }} /></div>
            <div className={classes.text}>
              <h6>Location</h6>
              <Input placeholder={'Enter Location'} setter={(value)=>setArea('location',value)} value={form.pr_area.location}/>
            </div>
          </div>

        </div>
      </div>

      {/* Second Information */}

      <div className={classes.purpose} >
        <div className={classes.left_side} >
          <div className={classes.ls_icon}><LiaUserTagSolid size={40} /></div>
          <h6>Price and Area</h6>
        </div>
        <div className={classes.right_side}>

          {/* Area */}


          <div className={classes.r1} style={{ height: '90px', width: '100%' }}>
            <div className={classes.icon} style={{ height: '30%' }}><TbResize size={15} style={{ backgroundColor: 'transparent' }} /></div>
            <div className={classes.text} style={{ display: 'flex' }}>
              <h6>Area</h6>
              <div className={classes.area_tags}>
                <div style={{ width: '70%' }}><Input type={'number'} setter={(value)=>setArea('length',value)} placeholder={"Enter Area.."} prop_type={form.pr_area['length']} /></div>
                <div style={{ width: '25%' }}><DropDown setter={setForm} prop_type={form.pr_area['measure']} option={d} /></div>
              </div>
            </div>
          </div>



          {/* Price  */}

          <div className={classes.r1} style={{ height: '90px', width: '100%' }}>
            <div className={classes.icon} style={{ height: '30%' }}><TbResize size={15} style={{ backgroundColor: 'transparent' }} /></div>
            <div className={classes.text} style={{ display: 'flex' }}>
              <h6>Price</h6>
              <div className={classes.area_tags}>
                <div style={{ width: '70%' }}><Input type={'number'} setter={setForm((prev)=>({...prev,...prev.pr_pay}))}aceholder={"Enter Price.."} prop_type={form.pr_pay} /></div>
                <div style={{ width: '25%' }}><DropDown setter={setForm} option={payment} /></div>
              </div>
            </div>
          </div>

          {/* Installment Plan */}

          <div className={classes.r1} style={{ height: '90px', width: '100%', marginBottom: '0', marginTop: '20px' }}>
            <div className={classes.icon} style={{ height: '35%' }}><RiMoneyDollarCircleLine size={15} style={{ backgroundColor: 'transparent' }} /></div>
            <div className={classes.text} style={{ display: 'flex' }}>

              <div className={classes.area_tags} >
                <div>
                  <h6>Installment</h6>
                  <p>Enable if listing is available on installments</p>
                </div>
                <ToggleButton setInstallment={setForm((prev)=>({...prev,...prev.pr_installment}))} />

              </div>
            </div>
          </div>

          {form.pr_installment && <div className={classes.installment_setting}>

            <div className={classes.r1} style={{ height: '90px', width: '100%' }}>
              <div className={classes.icon} style={{ height: '30%' }}><TbResize size={15} style={{ backgroundColor: 'transparent' }} /></div>
              <div className={classes.text} style={{ display: 'flex' }}>
                <h6>Advance Amount</h6>
                <div className={classes.area_tags}>
                  <div style={{ width: '70%' }}><Input type={'number'} setter={(value)=>handleInstallments('advance_amount',value)} placeholder={"Enter Amount.."} prop_type={form.pr_installment_plan['advance_amount']} /></div>
                  <div style={{ width: '25%' }}><DropDown setter={setForm} option={payment} /></div>
                </div>
              </div>
            </div>
            <div className={classes.r1} style={{ height: '90px', width: '100%' }}>
              <div className={classes.icon} style={{ height: '30%' }}><TbResize size={15} style={{ backgroundColor: 'transparent' }} /></div>
              <div className={classes.text} style={{ display: 'flex' }}>
                <h6>Monthly Installments</h6>
                <div className={classes.area_tags}>
                  <div style={{ width: '70%' }}><Input type={'number'} setter={(value)=>handleInstallments('monthly_installments')} placeholder={"Enter Number.."} prop_type={form.pr_installment_plan['monthly_installments']} /></div>
                  <div style={{ width: '25%' }}><DropDown setter={setForm} option={payment} /></div>
                </div>
              </div>
            </div>
            <div className={classes.r1} style={{ height: '90px', width: '100%' }}>
              <div className={classes.icon} style={{ height: '30%' }}><TbResize size={15} style={{ backgroundColor: 'transparent' }} /></div>
              <div className={classes.text} style={{ display: 'flex' }}>
                <h6>Number of Installments</h6>
                <Input placeholder={'Enter Number....'} type={'number'} setter={(value)=>handleInstallments('number_of_installments',value)} prop_type={form.pr_installment_plan['number_of_installments']} />
              </div>
            </div>

          </div>}

          <div className={classes.r1} style={{ height: '90px', width: '100%', marginTop: '15px' }}>
            <div className={classes.icon} style={{ height: '35%' }}><HiMiniDocumentCheck size={15} style={{ backgroundColor: 'transparent' }} /></div>
            <div className={classes.text} style={{ display: 'flex' }}>

              <div className={classes.area_tags}>
                <div>
                  <h6>Possession</h6>
                  <p>Enable if listing is ready for possession</p>
                </div>
                <ToggleButton setInstallment={setForm((prev)=>({...prev,...prev.pr_possession}))}/>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.purpose} >
        <div className={classes.left_side}>
          <div className={classes.ls_icon}><HiMiniClipboardDocumentCheck size={25} /></div>
          <h6>Add Information</h6>
        </div>
        <div className={classes.right_side} style={{ padding: '40px 0 70px 0' }}>
          <div className={classes.r1} style={{ height: '90px', width: '100%' }}>
            <div className={classes.icon} style={{ height: '30%' }}><TbResize size={15} style={{ backgroundColor: 'transparent' }} /></div>
            <div className={classes.text} style={{ display: 'flex' }}>
              <h6>Title</h6>
              <Input placeholder={"Enter Title ..."} type={'text'} setter={(value)=>handleDescription('title',value)} prop_type={form.pr_description['title']}/>
            </div>
          </div>

          <div className={classes.r1} style={{ height: '90px', width: '100%' }}>
            <div className={classes.icon} style={{ height: '30%' }}><TbResize size={15} style={{ backgroundColor: 'transparent' }} /></div>
            <div className={classes.text} style={{ display: 'flex' }}>
              <h6>Description</h6>
              <Input placeholder={"Enter Description ..."} type={'textarea'} setter={(value)=>handleDescription('description',value)} prop_type={form.pr_description['description']}/>
            </div>
          </div>
        </div>
      </div>



      <div className={classes.purpose} >
        <div className={classes.left_side}>
          <div className={classes.ls_icon}><HiMiniClipboardDocumentCheck size={25} /></div>
          <h6>Property Images And Videos</h6>
        </div>
        <div className={classes.right_side} style={{ padding: '10px 0' }}>
          <div className={classes.r1} style={{ height: '200px', width: '100%' }}>
            <div className={classes.icon} style={{ height: '15%' }}><CiImageOn size={20} style={{ backgroundColor: 'transparent' }} /></div>
            <div className={classes.text} style={{ display: 'flex' }}>
              <h6>Upload Images</h6>
              <div className={classes.image_div}>
                <div className={classes.icon} style={{ height: '55px', width: '55px' }}><BiImageAdd size={30} style={{ backgroundColor: 'transparent' }} /></div>
                <div className={classes.image_div_buttons}>
                  {
                    image_descrip.map((ele, index) => (
                      <div style={{ display: 'flex' }}>
                        <span><TiTick size={15} /></span>
                        <p>{ele.text}</p>
                      </div>
                    ))
                  }

                </div>
                <Input type={"file"} multiple={true} setter={handleFileChange} />
              </div>
            </div>
          </div>

          {/* <div className={classes.r1} style={{ height: '90px', width: '100%' }}>
            <div className={classes.icon} style={{ height: '30%' }}><MdOutlineVideoCall size={20} style={{ backgroundColor: 'transparent' }} /></div>
            <div className={classes.text} style={{ display: 'flex' }}>
              <h6>Upload Videos</h6>
                <Input placeholder={"Enter Description ..."} type={'textarea'} />
            </div>
          </div> */}


        </div>
      </div>

      <div className={classes.purpose} >
        <div className={classes.left_side}>
          <div className={classes.ls_icon}><HiMiniClipboardDocumentCheck size={25} /></div>
          <h6>Add Information</h6>
        </div>
        <div className={classes.right_side} style={{ padding: '40px 0 70px 0' }}>
          <div className={classes.r1} style={{ height: '90px', width: '100%' }}>
            <div className={classes.icon} style={{ height: '30%' }}><TfiEmail size={15} style={{ backgroundColor: 'transparent' }} /></div>
            <div className={classes.text} style={{ display: 'flex' }}>
              <h6>Email</h6>
              <Input placeholder={"Enter Email"} type={'email'} setter={(value)=>handleUserInfo('email',value)} prop_type={form.user_info['email']} />
            </div>
          </div>

          <div className={classes.r1} style={{ height: '90px', width: '100%' }}>
            <div className={classes.icon} style={{ height: '30%' }}><HiOutlineDevicePhoneMobile size={15} style={{ backgroundColor: 'transparent' }} /></div>
            <div className={classes.text} style={{ display: 'flex' }}>
              <h6>Mobile</h6>
              <div className={classes.area_tags}>
                <div style={{ width: '13%' }}><DropDown setter={setForm} option={payment} /></div>
                <div style={{ width: '75%' }}><Input type={'tel'} setter={(value)=>handleUserInfo('phoneNumber',value)} placeholder={"000-000-0000"} prop_type={form.user_info['phoneNumber']} /></div>
                <Button btnType='normal' leftIcon={FaPlus} customStyle={{ padding: '10px 13px', borderRadius: '15px', backgroundColor: 'transparent', border: '1px solid gray' }} onClick={handleUserInfo}></Button>
              </div>
            </div>
          </div>
          <div className={classes.r1} style={{ height: '90px', width: '100%' }}>
            <div className={classes.icon} style={{ height: '30%' }}><MdCall size={15} style={{ backgroundColor: 'transparent' }} /></div>
            <div className={classes.text} style={{ display: 'flex' }}>
              <h6>Landline</h6>
              <div className={classes.area_tags}>
                <div style={{ width: '13%' }}><DropDown setter={setForm} option={payment} /></div>
                <div style={{ width: '84%' }}><Input type={'tel'} setter={(value)=>handleUserInfo('landlineNumber',value)} placeholder={"000-000-0000"} prop_type={form.user_info['landlineNumber']} /></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.purpose} >
        <div className={classes.left_side}>
          <div className={classes.ls_icon}><MdOutlineAddHomeWork size={25} /></div>
          <h6>Add Features</h6>
        </div>
        <div className={classes.right_side} style={{ padding: '40px 0 70px 0' }}>
          <div className={classes.r1} style={{ height: '90px', width: '100%' }}>
            <div className={classes.icon} style={{ height: '30%' }}><LuBedSingle size={15} style={{ backgroundColor: 'transparent' }} /></div>
            <div className={classes.text} style={{ display: 'flex' }}>
              <h6>Bedrooms</h6>
              <div className={classes.area_tags} style={{width:'max-content',gap:'5px'}}>
                {form.pr_items['bedrooms'] != 'Rooms' && <div style={{ width: '25%' }}><Input type={"radio"} setter={(value)=>handleItems('bedrooms',value)} prop_type={form.pr_items['bedrooms']} label={'Rooms'}/></div>}
                {form.pr_items['bedrooms'] && <div style={{ width: '70%' }}><Input type={'number'} setter={(value)=>handleItems('number_of_bedrooms',value)} placeholder={"Enter Rooms.."} prop_type={form.pr_items['number_of_bedrooms']} /></div>}
                <div style={{ width: '25%' }}><Input type={'radio'} setter={(value)=>handleItems('bedrooms',value)} prop_type={form.pr_items['bedrooms']} label={'Studio'} /></div>
              </div>
            </div>
          </div>



          {/* Bathrooms  */}

          <div className={classes.r1} style={{ height: '90px', width: '100%' }}>
            <div className={classes.icon} style={{ height: '30%' }}><LuBath size={15} style={{ backgroundColor: 'transparent' }} /></div>
            <div className={classes.text} style={{ display: 'flex' }}>
              <h6>Bathrooms</h6>
              <div className={classes.area_tags}>
                <div style={{ width: '70%' }}><Input type={'number'} setter={(value)=>handleItems('washrooms',value)} placeholder={"Enter Price.."} prop_type={form.pr_items['washrooms']} /></div>
              </div>
            </div>
          </div>
          <div className={classes.r1} style={{ height: '90px', width: '100%' }}>
            <div className={classes.icon} style={{ height: '30%' }}><AiOutlineHome size={15} style={{ backgroundColor: 'transparent' }} /></div>
            <div className={classes.text} style={{ display: 'flex' }}>
              <h6>Add Extra Features</h6>
              <Input placeholder={"Add Features ..."} type={'textarea'} setter={setForm(prev=>({...prev,...prev.additional_information}))} prop_type={form.additional_information}/>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.purpose} style={{display:'flex',backgroundColor:'transparent', justifyContent:'flex-end',padding:'10px 0px',marginBottom:'10px'}} >
        <Button label={"Submit"} onClick={handleForm}/>
      </div>



    </div>
  );
}

export default Properties;
