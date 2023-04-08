import React from 'react'
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image'


const Header = () => {
  return (
<section>
    
        <div className='container'>
        <div className='bg-light'>
 <div className='text-center '>       
 <Image src={require('./asset/my-1.jpg')}fluid rounded width={200} ></Image>
 </div>

    

    <div className=' text-center '>
        <h1 className='myname fw-bold'>Venkatesh</h1>
        <p className='myoccupation fw-bold'>Frontend Web Developer</p>
    </div>
     <div className='container'>
         
                <h2 className='m-start-5 text-bg-dark'>PROFILE </h2>
                <p className='text-capitalized '>
                    Frontend Web Developer Having Ability To Work With HTML5, CSS3, JavaScript, Bootstrap, React js . To Work In a Professional Environment Where I Can Find Myself In a Decisive Opportunities For Creating
                    Value Added Carrer For Myself And Extend Quality Service To My Organisation
                </p>
            </div>
    
          <container>
            <row className='align-item-center'> 
                
                <h2 className='myskill ms-2  text-bg-dark '>SKILLS</h2>
               <ul className=''>
              <li> HTML </li>
             <li> CSS</li>
             <li> JavaScript </li>
             <li>Bootstrap</li>
             <li>React.js</li>
             </ul>  
             

             
            
    <h2 className="ms-2  text-bg-dark">besant technology certification  </h2>
    <ul className=''>
    

        <li>
        i done my owned web Developer project 
        </li>
        </ul>
        </row>
     </container>
     <h2 className='ms-2  text-bg-dark'> My Project</h2>
     <Table responsive style={{color:"dark"}}>
        <thead>
            <tr>
                <th>project name</th>
                <th>Project Domain</th>
                <th>Programming Languages</th>
                
            </tr>
            
        </thead>
        <tbody>
            <tr>
                <td> My Resume</td>
                <td>web Developer</td>
                <td>Html , Css , JavaScript , Bootstrap , React.js</td>
                {/* <td><a href='/'></a> </td> */}
            </tr>
        </tbody>
        </Table>

    <h2 className='ms-2  text-bg-dark'>Education Qualification</h2>
  <Table responsive >
      <thead>
        <tr>
          <th>Degree</th>
          <th>School/College</th>
          <th>year of passed out</th>
          <th>percentage</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>BE.Mechanical Engineering</td>
          <td>ST.Peter College Of Engineering And Technology</td>
          <td>2021</td>
          <td>7.5cgp</td>
        </tr>
        <tr>
          <td>Diplomo.Mechanical Engineering</td>
          <td>Jaya Polytechnic College</td>
          <td>2018</td>
          <td>69%</td>
        </tr>
        <tr>
          <td>10th</td>
          <td>Sree Hari Saratha Vidyalaya Matriculation Higher Secondary School</td>
          <td>2015</td>
          <td>58%</td>
        </tr>
      </tbody>
    </Table>


    </div>
</div>
    
    
</section>  
  )
}

export default Header

