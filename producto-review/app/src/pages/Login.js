export default function Login(){
    return(
        <>
        <div class="container-fluid pt-5">
        
        <div class="row px-xl-5">
            <div class="col-lg-5 mb-5">
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
                            <button class="btn btn-primary py-2 px-4" type="submit"  >Send
                                Message</button>
                        </div>
             
                </div>
            </div>
            
            <div class="col-lg-5 mb-5">
                <div class="contact-form">
                     
                    <h1>Register</h1>
                    
                        <div class="control-group">
                            <input type="text" class="form-control"  placeholder="Your Name"
                                required="required"  />
                            <p class="help-block text-danger"></p>
                        </div>
                        <div class="control-group">
                            <input type="email" class="form-control"  placeholder="Your Email"
                                required="required"   />
                            <p class="help-block text-danger"></p>
                        </div>
                        <div class="control-group">
                            <input type="text" class="form-control"   placeholder="Password"
                                required="required"  />
                            <p class="help-block text-danger"></p>
                        </div>
                        <div class="control-group">
                            <input type="text" class="form-control"   placeholder="Re-Password"
                                required="required"  />
                            <p class="help-block text-danger"></p>
                        </div>
                        <div>
                            <button class="btn btn-primary py-2 px-4" type="submit"  >Send
                                Message</button>
                        </div>
                  
                </div>
            </div>
        </div>
    </div>
        </>
    )
}