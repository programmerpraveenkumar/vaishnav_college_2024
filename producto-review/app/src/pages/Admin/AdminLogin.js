export default function AdminLogin(){
    return(
        <>
        <div class="container-fluid pt-5">
        
        <div class="row px-xl-5 justify-content-center">
               <div class="col-lg-3"></div>
            <div class="col-lg   mb-5">
                <div class="contact-form">
                <h1>Login</h1>
                    
                        <div class="control-group">
                            <input type="text" class="form-control"   placeholder="Your Email"
                                required="required"  />
                            <p class="help-block text-danger"></p>
                        </div>
                        <div class="control-group">
                            <input type="email" class="form-control"   placeholder="Your Password"
                                required="required"   />
                            <p class="help-block text-danger"></p>
                        </div>
                        
                        <div>
                            <button class="btn btn-primary py-2 px-4" type="submit"  >
                                login</button>
                        </div>
             
                </div>
            </div>
            <div class="col-lg-3"></div>
            
        </div>
    </div>
        </>
    )
}