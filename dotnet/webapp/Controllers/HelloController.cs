using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;


[Route("api/[controller]")]
public class HelloController : Controller {

	[HttpGet]
	public string Get() { return "HelloWorld"; }
}
