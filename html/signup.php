<?php include('top.php') ?>
     
   
       <div class="container-fluid">
   	<div class="row">
    
        
    
    <div class="col-lg-12 col-md-12  col-sm-12 col-xs-12 innerlogin">
    
        
         <div class="container">
          
         
          <div class="login_block "> <span><a href="javascript:void(0)">Login</a> / <a href="javascript:void(0)">Signup</a></span></div>
          
          
          
          <div class="clearfix"></div>
          
   </div>  
            </div>  
             <div class="clearfix"></div>
               <a href="index.php"> <img src="images/logo.png" alt="#" class="mobilelogo"></a>
               
        </div>
        
        </div> 
         
         
        
        <div class="container">
        	<div class="row">
        <div class="col-lg-12 col-md-12  col-sm-12 col-xs-12">

       <div class="signup-form-wrapper">
       
       
       
       <h2>Register <span>Here!</span></h2>
        <div class="popupdevider"></div>
        
        
        <img src="images/signicon1.png" alt="#" style="display:block; margin:25px auto;">
        
        
       
      
      
      
      <div class="signup-form-left">
      
      <form>
      <label>Your basic info</label>
      <input type="text" placeholder="First Name" /><!--  <span class="errormsg">error msg </span>-->
	  <input type="text" placeholder="Last Name" /><!--  <span class="errormsg">error msg </span>-->
      <input type="text" placeholder="Email" /><!--  <span class="errormsg">error msg </span>-->
       <input type="password" placeholder="Password" /><!--  <span class="errormsg">error msg </span>-->
       
       
       
      <label>Your profile</label>
         
          <textarea placeholder="Biography"></textarea>   
           <!--  <span class="errormsg">error msg </span>-->  
           
           
           
           <label for="job">Job Role:</label>
        <select id="job" name="user_job">
          <optgroup label="Web">
            <option value="frontend_developer">Front-End Developer</option>
            <option value="php_developor">PHP Developer</option>
            <option value="python_developer">Python Developer</option>
            <option value="rails_developer"> Rails Developer</option>
            <option value="web_designer">Web Designer</option>
            <option value="WordPress_developer">WordPress Developer</option>
          </optgroup>
          <optgroup label="Mobile">
            <option value="Android_developer">Androild Developer</option>
            <option value="iOS_developer">iOS Developer</option>
            <option value="mobile_designer">Mobile Designer</option>
          </optgroup>
          <optgroup label="Business">
            <option value="business_owner">Business Owner</option>
            <option value="freelancer">Freelancer</option>
          </optgroup>
          <optgroup label="Other">
            <option value="secretary">Secretary</option>
            <option value="maintenance">Maintenance</option>
          </optgroup>
        </select>
        
        <!--  <span class="errormsg">error msg </span>-->  
               <input type="submit" value="Create Account"  class="registerbtn"/>
      
      </form>
                  
      </div>
      
       
      
      
      
      
      
      
      
      
     
      
      
  
      
       </div>
    </div>
     </div>
      </div>
    
<?php include('footer.php') ?>

