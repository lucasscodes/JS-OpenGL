//
//  initShaders.js
//

function initShaders( gl, vertexShaderId, fragmentShaderId )
{
    const compileShader = ( gl, gl_shaderType, shaderSource ) => {
        // Create the shader
        shader = gl.createShader( gl_shaderType );

        // Set the shader source code
        gl.shaderSource( shader, shaderSource );

        // Compile the shader to make it readable for the GPU
        gl.compileShader( shader );
        var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
        
        if (!success) {
            // Something went wrong during compilation; get the error
            throw "could not compile shader:" + gl.getShaderInfoLog(shader);
        }
        else {
            return shader;
        }
    }
    
    /* 
     * Setup shader program
     */
    vShaderSource = document.querySelector( '#' + vertexShaderId ).text;
    fShaderSource = document.querySelector( '#' + fragmentShaderId ).text;

    vertexShader = compileShader( gl, gl.VERTEX_SHADER, vShaderSource );
    fragmentShader = compileShader( gl, gl.FRAGMENT_SHADER, fShaderSource );

    // Build the program
    const program = gl.createProgram();

    // Attach shaders to it
    gl.attachShader( program, vertexShader );
    gl.attachShader( program, fragmentShader );

    gl.linkProgram( program );

    return program;
}