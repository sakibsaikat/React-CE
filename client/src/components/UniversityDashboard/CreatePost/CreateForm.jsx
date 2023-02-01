import React from 'react';
import './CreateForm.css';

const CreateForm = () => {

    let dt  = new Date();
    let year = dt.getFullYear();
    year = parseInt(year);

  return (
            <div class="content2">

                <h2 class="caption">Create Admission Post</h2>

                <div class="post-form">
                    <form action="/upost" id="form1" class="create_post_form" method="POST">
                        <div class="department">

                            <div className='input_div'>
                                <select class="form-select" name="degree">
                                    <option selected disabled>Degree</option>
                                    <option value="Bachelor">Bachelor</option>
                                    <option value="Masters">Masters</option>
                                </select>
                            </div>

                            <div className='input_div'>
                                <select class="form-select" name="semester">
                                    <option selected disabled>Semester</option>
                                    <option value="Spring ">Spring { year }</option>
                                    <option value="Summer ">Summer { year }</option>
                                    <option value="Fall ">Fall { year }</option>
                                    <option value="Spring ">Spring { year+1 }</option>
                                </select>
                            </div>


                            <div className='input_div'>
                                <select class="form-select" name="department">
                                    <option selected disabled>Department</option>
                                    <option value="CSE">CSE</option>
                                    <option value="EEE">EEE</option>
                                    <option value="CE">CE</option>
                                    <option value="BBA">BBA</option>
                                    <option value="Textile">Textile</option>
                                    <option value="English">English</option>
                                    <option value="Bangla">Bangla</option>
                                    <option value="Architechture">Architechture</option>
                                </select>
                            </div>
                            

                            <div className='input_div'>
                                <select class="form-select" name="shift">
                                    <option selected disabled>Shift</option>
                                    <option value="Day">Day</option>
                                    <option value="Evening">Evening</option>
                                </select>
                            </div>
                            

                            <div className='input_div'>
                                <select class="form-select" name="duration">
                                    <option selected disabled>Duration</option>
                                    <option value="1">1 year</option>
                                    <option value="2">2 years</option>
                                    <option value="3">3 years</option>
                                    <option value="4">4 years</option>
                                    <option value="5">5 years</option>
                                </select>
                            </div>

                            <div class="input_div">
                                <input type="text" name="t_credit" class="form-control"  placeholder="Total Credit" />
                            </div>
                            <div class="input_div">
                                <input type="text" name="pc_cost" class="form-control"  placeholder="Per Credit Cost" />
                            </div>
                            <div class="input_div">
                                <input type="text" name="cost" class="form-control" placeholder="Regular Cost" />
                            </div>
                            
                        </div>

                    
                        <button type="submit" class="add_btn">Add</button>
                    </form>
                </div>

                <hr class="hr1" />

                <div class="table-box">
                    <table class="table">
                        <thead>
                        <tr>
                            <th scope="col">Time</th>
                            <th scope="col">Degree</th>
                            <th scope="col">Semester</th>
                            <th scope="col">Department</th>
                            <th scope="col">Shift</th>
                            <th scope="col">Duration</th>
                            <th scope="col">Total Credit</th>
                            <th scope="col">Per Credit Cost</th>
                            <th scope="col">Regular Cost</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>

                            <tr>

                            <td>Time</td>
                            <td>Degree</td>
                            <td>Semester</td>
                            <td>Department</td>
                            <td>Shift</td>
                            <td>Duration</td>
                            <td>Total Credit</td>
                            <td>Per Credit Cost</td>
                            <td>Regular Cost</td>
                
                            
                            <td>
                                <a href="/updateinfo/<%= value._id %>" class="btn"><i class="fa-solid fa-pen-to-square"></i></a>
                                <a type="submit" href="/unipostdel/<%= value._id %>" class="btn"><i class="fa-solid fa-trash"></i></a>
                            </td>
                            </tr>


                
                
                
                </tbody>
            </table>
        </div>

        <a href="/createunipost" class="pb-btn">Publish</a>




        </div>
    
  )
}

export default CreateForm