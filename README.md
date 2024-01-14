# Computer Science and Engineering

A CPU cycle, or clock cycle represents the time it takes for one complete cycle of a CPU to fetch, decode, execute, and write back an instruction.
The CPU cycle is often measured in hertz (Hz), where one hertz is equal to one cycle per second.
For example, a CPU with a clock speed of 2 gigahertz (2 GHz) can perform 2 billion cycles per second.

One complete cycle of a computer's CPU, also known as a clock cycle, involves the following stages:
- **Fetch:** The CPU retrieves the next instruction from the computer's memory.
- **Decode:** The fetched instruction is interpreted by the CPU to understand what operation needs to be performed.
- **Execute:** The CPU performs the operation or task specified by the decoded instruction.
- **Write Back:** The results of the executed instruction are written back to the appropriate registers or memory locations.

The CPU reads from various types of memory to execute instructions and store data during its operation. The main types of memory that the CPU interacts with are:

- **RAM (Random Access Memory):** RAM is a volatile (changeable, inconstant) memory used by the CPU for temporarily storing data that is actively being used or processed. It allows for quick read and write operations and is a crucial component for the overall system performance. When you run a program, its code and data are loaded into RAM for fast access by the CPU.

- **Cache Memory:** Cache memory is a small-sized type of volatile computer memory that provides high-speed data access to the processor and stores frequently used computer programs, applications, and data. Modern CPUs have multiple levels of cache (L1, L2, L3) to store and retrieve data quickly.

- **Registers:** Registers are small, fast storage locations within the CPU itself. They are used to store temporary data and intermediate results during the execution of instructions. Registers are faster than RAM or cache but are also more limited in size.

- **ROM (Read-Only Memory):** ROM is a non-volatile memory that typically contains firmware or low-level system instructions. It holds code that doesn't change during the normal operation of the system, such as the computer's BIOS or firmware.

- **Virtual Memory (Page File or Swap Space):** Virtual memory is an abstraction that combines both RAM and storage (like a hard drive or SSD) to provide an extended working space for the CPU. When the physical RAM is full, the operating system may use part of the storage as virtual memory to temporarily store less frequently used data.

When a program is executed, the CPU fetches instructions and data from these memory types as needed. The hierarchy, from fastest and smallest to slower and larger, typically goes: Registers > Cache > RAM > Storage. The CPU's ability to efficiently manage and access data from these memory types contributes significantly to overall system performance.

[Complete Intro to Computer Science - Data Structures and Algorithms](https://btholt.github.io/complete-intro-to-computer-science/)

[Terms and Abbreviations](https://github.com/stepanenko/computer-science-info/blob/master/CS_terms.md)
